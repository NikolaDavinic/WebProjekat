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
    public class PlaninarskoDrustvoController : ControllerBase
    {
        public PlaninarenjeContext Context { get; set; }
        public PlaninarskoDrustvoController(PlaninarenjeContext context)
        {
            Context=context;
        }

        [Route("PrezumiDogadjajeZaDrustvo/{idDrustva}")]
        [HttpGet]
        public async Task<ActionResult> PrezumiDogadjajeZaDrustvo(int idDrustva)
        {
            var dogadjajiZaDrustvo = Context.PlaninarskDrustvaDogadjaji
                                            .Include(p => p.PlaninarskaDrustva)
                                            .Include(p => p.Dogadjaji)
                                            .ThenInclude(p => p.Planina)
                                            .Where(p => p.PlaninarskaDrustva.IDPlaninarskogDrustva==idDrustva);
            var dog = await dogadjajiZaDrustvo.ToListAsync();

            return Ok(
                dog.Select(p => 
                    new
                    {
                        Id = p.Dogadjaji.IDDogadjaja,
                        ImeDogadjaja = p.Dogadjaji.ImeDogadjaja,
                        Vrh = p.Dogadjaji.ImeVrhaDogadjaja,
                        Datum = p.Dogadjaji.DatumOdrzavanja,
                        Planina = p.Dogadjaji.Planina.ImePlanine,
                        Tezina = p.Dogadjaji.TezinaUspona,
                        BrojUcesnika = p.Dogadjaji.BrojUcesnika
                    }
                ).ToList()
            );                   
        }


        [Route("PreuzmiPlaninarskaDrustva")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiPlaninarskaDrustva()
        {
            return Ok(await Context.PlaninarskaDrustva.Select(p => 
            new
            {
                p.IDPlaninarskogDrustva,
                p.ImePlaninarskogDrustva,
                p.Grad,
                p.Drzava,
                p.BrojClana,
                p.GodisnjaClanarina,
                p.Planinari,
                p.Dogadjaji
            }).ToListAsync());
        }



        [Route("DodajPlaninaraUPlaninarskoDrustvo/{ime}/{prezime}/{jmbg}/{spremnost}/{grad}/{drzava}/{idDrustva}")]
        [HttpPost]
        public async Task<ActionResult> DodajPlaninaraUPlaninarskoDrustvo(String ime, String prezime, int jmbg, int spremnost,String grad, String drzava, int idDrustva)
        {
            if(string.IsNullOrEmpty(ime) || ime.Length > 50)
            {
                return BadRequest("Ime planinara ne sme da bude prazno i ne sme da ima vise od 50 karaktera!");
            }
            if(string.IsNullOrEmpty(prezime) || prezime.Length > 50)
            {
                return BadRequest("Prezime planinara ne sme da bude prazno i ne sme da ima vise od 50 karaktera!");
            }
            if(string.IsNullOrEmpty(grad) || grad.Length > 50)
            {
                return BadRequest("Grad ne sme da bude prazno i ne sme da ima vise od 50 karaktera!");
            }
            if(string.IsNullOrEmpty(drzava) || drzava.Length > 50)
            {
                return BadRequest("Drzava ne sme da bude prazno i ne sme da ima vise od 50 karaktera!");
            }
            if(jmbg < 0)
            {
                return BadRequest("JMBG ne sme da bude negativan broj!");
            }
            if(spremnost < 0)
            {
                return BadRequest("Spremnost ne sme da bude negativan broj!");
            }
            if(idDrustva < 0)
            {
                return BadRequest("Id drustva ne sme da bude negativan broj!");
            }
            var drustvo = Context.PlaninarskaDrustva.Where(p => p.IDPlaninarskogDrustva==idDrustva).FirstOrDefault();
        
            foreach(var a in Context.Planinari)
            {
                if(a.JMBG==jmbg)
                {
                    return BadRequest("Planinar sa ovim JMBG vec postoji!!");
                }
            }
            Planinar p = new Planinar
                {
                    Ime=ime,
                    Prezime=prezime,
                    JMBG=jmbg,
                    Spremnost=spremnost,
                    Grad=grad,
                    Drzava=drzava,
                    IDPlaninarskogDrustva=drustvo
                };
            Context.Planinari.Add(p);
            await Context.SaveChangesAsync();
            var planinar = await Context.Planinari.Where(p => p.JMBG==jmbg).FirstOrDefaultAsync();
            drustvo.Planinari.Add(planinar);
            drustvo.BrojClana++;
            await Context.SaveChangesAsync();

            return Ok("Uspesno dodat planinar");

  
        }


        [Route("DodajPlaninarskoDrustvoParametri/{ime}/{grad}/{drzava}/{clanarina}")]
        [HttpPost]
        public async Task<ActionResult> DodajPlaninarskoDrustvoParametri(String ime, String grad, String drzava, int clanarina)
        {
            if(string.IsNullOrEmpty(ime) || ime.Length > 50)
            {
                return BadRequest("Ime drustva ne sme da bude prazno i ne sme da ima vise od 50 karaktera!");
            }
            if(string.IsNullOrEmpty(grad) || grad.Length > 50)
            {
                return BadRequest("Grad drustva ne sme da bude prazno i ne sme da ima vise od 50 karaktera!");
            }
            if(string.IsNullOrEmpty(drzava) || drzava.Length > 50)
            {
                return BadRequest("Drzava drustva ne sme da bude prazno i ne sme da ima vise od 50 karaktera!");
            }
            if(clanarina < 0)
            {
                return BadRequest("Clanarina ne sme da bude negativan broj!");
            }
            foreach(var a in Context.PlaninarskaDrustva)
            {
                if(String.Compare(ime,a.ImePlaninarskogDrustva)==0 && String.Compare(grad,a.Grad)==0)
                {
                    return BadRequest("U ovom gradu vec postoji drustvo sa ovim imenom!!!");
                }
            }
            try
            {
                PlaninarskoDrustvo p = new PlaninarskoDrustvo
                {
                    ImePlaninarskogDrustva=ime,
                    Grad=grad,
                    Drzava=drzava,
                    BrojClana=0,
                    GodisnjaClanarina=clanarina
                };
                Context.PlaninarskaDrustva.Add(p);
                await Context.SaveChangesAsync();
                return Ok($"Planinarsko drustvo imenom: {p.ImePlaninarskogDrustva} je uspesno dodato.");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        
        

    }
}
