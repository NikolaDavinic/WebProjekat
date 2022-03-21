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
    public class DogadjajController : ControllerBase
    {
        
        public PlaninarenjeContext Context { get; set; }

        public DogadjajController(PlaninarenjeContext context)
        {
            Context=context;
        }


        [Route("DodajDogadjajZaDrustvo/{IDDrustva}/{imeDog}/{imeVrha}/{datum}/{planinaID}/{tezina}/{brUcenika}")]
        [HttpPost]
        public async Task<ActionResult> DodajDogadjajZaDrustvo(int IDDrustva,String imeDog, String imeVrha, DateTime datum, int planinaID, int tezina, int brUcenika)
        {
            if(string.IsNullOrEmpty(imeDog) || imeDog.Length>50)
            {
                return BadRequest("Ime ne moze da ima manje od 0 karaktera ili vise od 50!");
            }
            if(string.IsNullOrEmpty(imeVrha) || imeVrha.Length > 30)
            {
                return BadRequest("Prezime ne moze da ima manje od 0 karaktera ili vise od 30!");
            }
            if(tezina < 0 || tezina > 10)
            {
                return BadRequest("Tezina moze da bude u opsegu od 0 do 10!");
            }
            if(brUcenika < 0)
            {
                return BadRequest("Broj ucesnika mora da bude broj veci od nule!");
            }
            try
            {
            var drustvo = await Context.PlaninarskaDrustva.Where(p => p.IDPlaninarskogDrustva==IDDrustva).FirstOrDefaultAsync();
            if(drustvo == null)
                return BadRequest("Ne postoji drustvo sa tim ID-jem!");

            var planina = await Context.Planine.Where(p => p.IDPlanine==planinaID).FirstOrDefaultAsync();
            var dogadjaj = await Context.Dogadjaji.Where(p => p.ImeDogadjaja==imeDog).FirstOrDefaultAsync();
            if(dogadjaj == null)
            {
                Dogadjaj d = new Dogadjaj
                {
                    ImeDogadjaja=imeDog,
                    ImeVrhaDogadjaja=imeVrha,
                    DatumOdrzavanja=datum,
                    Planina=planina,
                    TezinaUspona=tezina,
                    BrojUcesnika=brUcenika
                };
                Context.Dogadjaji.Add(d);
                await Context.SaveChangesAsync();
            }
            var da = await Context.Dogadjaji.Where(p => p.ImeDogadjaja==imeDog && p.BrojUcesnika==brUcenika).FirstOrDefaultAsync();
            Organizuje n = new Organizuje
            {
                Dogadjaji = da,
                PlaninarskaDrustva = drustvo
            };
            // var provera = Context.PlaninariDogadjaji.Where(p => p.Planinari==planinar && p.Dogadjaji==dogadjaj).FirstOrDefaultAsync();
            // if(provera==null){
                Context.PlaninarskDrustvaDogadjaji.Add(n);
                await Context.SaveChangesAsync();
            //}
            return Ok("Uspesno smo dodali dogadjaj");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

     


        [Route("PreuzmiDogadjaje")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiDogadjaje()
        {
            return Ok(await Context.Dogadjaji.Select(p => 
            new
            {
                p.IDDogadjaja,
                p.ImeDogadjaja,
                p.ImeVrhaDogadjaja,
                p.DatumOdrzavanja,
                p.Planina,
                p.TezinaUspona,
                p.BrojUcesnika
            }).ToListAsync());
        }

        

        [Route("IzbrisiDogadjaj/{drustvoId}/{dogadjajId}")]
        [HttpDelete]
        public async Task<ActionResult> IzbrisiDogadjaj(int drustvoId, int dogadjajId)
        {
            if(drustvoId<0 || dogadjajId<0)
            {
                return BadRequest("ID ne moze da bude negativan broj!");
            }
            
            try
            {
                var dogadjaj = await Context.Dogadjaji.Where(p => p.IDDogadjaja==dogadjajId).FirstOrDefaultAsync();
                if(dogadjaj==null)
                {
                   return BadRequest("Ovaj dogadjaj ne postoji!");
                }
                var drustvo = await Context.PlaninarskaDrustva.Where(p => p.IDPlaninarskogDrustva==drustvoId).FirstOrDefaultAsync();
                if(drustvo==null)
                {
                    return BadRequest("Ovo drustvo ne postoji!");
                }

                
                var dogDrus = await Context.PlaninarskDrustvaDogadjaji.Where(p => p.Dogadjaji==dogadjaj).FirstOrDefaultAsync();
                if(dogDrus==null)
                {
                    return BadRequest("Ovo drustvo nije organizovalo ovaj dogajaj!");
                }
                Context.PlaninarskDrustvaDogadjaji.Remove(dogDrus);
                await Context.SaveChangesAsync();
                Context.Dogadjaji.Remove(dogadjaj);
                await Context.SaveChangesAsync();
                return Ok("uspesno");
                
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        
    }
}
