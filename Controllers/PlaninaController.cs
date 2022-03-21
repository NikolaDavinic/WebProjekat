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
    public class PlaninaController : ControllerBase
    {
        public PlaninarenjeContext Context { get; set; }

        public PlaninaController(PlaninarenjeContext context)
        {
            Context=context;
        }
        [Route("PreuzmiPlanine")]
        [HttpGet]
        public async Task<ActionResult> PreuzmiPlanine()
        {
            return Ok(await Context.Planine.Select(p=>
            new
            {
                p.IDPlanine,
                p.ImePlanine,
                p.Drzava,
                p.MaksimalnaVisina,
                p.TezinaPlanine,
                p.ImeNajvisegVrha
            }).ToListAsync());
        }


        [Route("DodajPlaninuParametri/{ime}/{drzava}/{maxVisina}/{vrh}/{tezina}")]
        [HttpPost]
        public async Task<ActionResult> DodajPlaninuParametri(String ime, String drzava, int maxVisina, String vrh, int tezina)
        {
            if(string.IsNullOrWhiteSpace(ime) || ime.Length >50 )
            {
                return BadRequest("Pogresno ime!");
            }
            if(string.IsNullOrWhiteSpace(drzava) || drzava.Length >50 )
            {
                return BadRequest("Presli ste granicu za slova kod drzave!");
            }
            if(string.IsNullOrWhiteSpace(vrh) || vrh.Length >50 )
            {
                return BadRequest("Pogresno ime najviseg vrha!");
            }
            if(tezina<0 || tezina>10)
            {
                return BadRequest("Tezina planine moze da bude samo u rasponu od 0 do 10!");
            }
            if(maxVisina<0 || maxVisina>8850)
            {
                return BadRequest("Najvisi vrh na svetu je 8848m pa ne postoji visi vrh!");
            }
            foreach(var a in Context.Planine)
            {
                if(String.Compare(a.ImePlanine,ime)==0)
                {
                    return BadRequest("Planina sa ovim imenom vec postoji!!!");
                }
            }
            try
            {
                Planina p = new Planina
                {
                    ImePlanine=ime,
                    Drzava=drzava,
                    MaksimalnaVisina=maxVisina,
                    ImeNajvisegVrha=vrh,
                    TezinaPlanine=tezina
                };
                Context.Planine.Add(p);
                await Context.SaveChangesAsync();
                return Ok($"Planina je uspeno dodata!");
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        

        
    }
}
