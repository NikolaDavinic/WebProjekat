using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Models;

namespace Projekat.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlaninarController : ControllerBase
    {
        public PlaninarenjeContext Context { get; set; }
        public PlaninarController(PlaninarenjeContext context)
        {
            Context=context;
        }
        [Route("PreuzmiPlaninare")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiPlaninare()
        {
            return Ok(await Context.Planinari.Select(p => 
            new
            {
                p.IDPlaninara,
                p.Ime,
                p.Prezime,
                p.JMBG,
                p.Spremnost,
                p.Grad,
                p.Drzava,
                p.IDPlaninarskogDrustva
            }).ToListAsync());
        }


        [Route("PreuzmiPlaninareIzPlaninarskogDrustva/{drustvoID}")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiPlaninareIzPlaninarskogDrustva(int drustvoID)
        {
            var d = Context.PlaninarskaDrustva
                            .Include(p => p.Planinari)
                            .Where(p => p.IDPlaninarskogDrustva==drustvoID);
            var pom = await d.FirstOrDefaultAsync();
            
            return Ok(
                pom.Planinari.Select(p => 
                new
                {
                        JMBG = p.JMBG,
                        Ime = p.Ime,
                        Prezime = p.Prezime,
                        Spremnost = p.Spremnost,
                        Grad = p.Grad,
                        Drzava = p.Drzava,
                        id = p.IDPlaninara
                })
            );         
        }

        


        [Route("PrezumiPlaninara/{planinarID}")]
        [HttpGet]
        public async Task<ActionResult> PrezumiPlaninara(int planinarID)
        {
            if(planinarID < 0)
            {
                return BadRequest("Pogresan ID!");
            }
            try
            {
                return Ok(await Context.Planinari.Where(p => p.IDPlaninara==planinarID).FirstOrDefaultAsync());
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        
        [Route("IzbrisiPlaninara/{drustvoID}/{planinarID}")]
        [HttpDelete]
        public async Task<ActionResult> IzbrisiPlaninara(int drustvoID, int planinarID)
        {
            var drustvo = await Context.PlaninarskaDrustva.Where(p => p.IDPlaninarskogDrustva==drustvoID).FirstOrDefaultAsync();
            if(drustvo==null)
            {
                return BadRequest("Ne postoji drustvo sa tim ID-em!");
            }
            var planinar = await Context.Planinari.Where(p => p.IDPlaninara==planinarID).FirstOrDefaultAsync();
            if(planinar==null)
            {
                return BadRequest("Ne postoji planinar sa tim ID-em!");
            }
            try
            {
                drustvo.Planinari.Remove(planinar);
                drustvo.BrojClana--;
                Context.Planinari.Remove(planinar);
                await Context.SaveChangesAsync();
                return Ok("Uspesno izbrisan planinar!");
                // var planinar = await Context.Planinari.FindAsync(id);
                // String ime = planinar.Ime;
                // String prezime = planinar.Prezime;
                // Context.Planinari.Remove(planinar);
                // await Context.SaveChangesAsync();
                //return Ok($"Planinar sa imenom:{ime} i prezmenom:{prezime} je uspesno izbrisan.");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        
        
        [Route("PromeniPlaninara/{ime}/{prezime}/{jmbg}/{spremnost}/{grad}/{drzava}")]
        [HttpPut]
        public async Task<ActionResult> PromeniPlaninara(String ime, String prezime, int jmbg, int spremnost, String grad, String drzava)
        {
            if(string.IsNullOrEmpty(ime) || ime.Length>30)
            {
                return BadRequest("Ime ne moze da ima manje od 0 karaktera ili vise od 30!");
            }
            if(string.IsNullOrEmpty(prezime) || prezime.Length>30)
            {
                return BadRequest("Prezime ne moze da ima manje od 0 karaktera ili vise od 30!");
            }
            if(jmbg<0)
            {
                return BadRequest("JMBG ne sme da bude manji od 0!!");
            }
            if(spremnost<0 || spremnost>10)
            {
                return BadRequest("Spremnost moze da bude u opsegu od 0 do 10!");
            }
            if(string.IsNullOrEmpty(grad) || grad.Length>40)
            {
                return BadRequest("Mora da se unese grad, ali ne sme da ima vise od 40 karaktera!");
            }
            if(string.IsNullOrEmpty(drzava) || drzava.Length>40)
            {
                return BadRequest("Mora da se unese drzava, ali ne sme da ima vise od 40 karaktera!");
            }
            try
            {
                var pom = Context.Planinari.Where(p => p.JMBG==jmbg).FirstOrDefault();
                if(pom==null)
                {
                    return BadRequest("Ne postoji!!");
                }
                pom.Ime=ime;
                pom.Prezime=prezime;
                pom.JMBG=jmbg;
                pom.Spremnost=spremnost;
                pom.Grad=grad;
                pom.Drzava=drzava;
                await Context.SaveChangesAsync();
                return Ok($"Uspesno smo obavili izmenu podataka");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
