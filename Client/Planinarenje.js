import { Planinar } from "./Planinar.js";
import { Dogadjaj } from "./Dogadjaj.js";
import { PlaninarskoDrustvo } from "./PlaninarskoDrustvo.js";
import { Planina } from "./Planina.js";
import { } from "./main.js"

export class Planinarenje{

    constructor(listaPlaninara, listaDogadjaja, listaplaninarskihDrustva,listaPlanina){

        this.listaPlaninara=listaPlaninara;
        this.listaDogadjaja=listaDogadjaja;
        this.listaplaninarskihDrustva=listaplaninarskihDrustva;
        this.listaPlanina=listaPlanina;
        this.kontejner=null;
    }

    

    crtaj(host){
        

        this.kontejner=document.createElement("div");
        this.kontejner.className = "GlavniKontejner";
        host.appendChild(this.kontejner);
        
        while(this.kontejner.firstChild){
            this.kontejner.removeChild(this.kontejner.firstChild);
        }

        let navigacija = document.createElement("nav");
        navigacija.classList.add("navbar");
        this.kontejner.appendChild(navigacija);

        let divZaNav = document.createElement("div");
        divZaNav.classList.add("navBody");
        navigacija.appendChild(divZaNav);

        let elNav = document.createElement("li");
        divZaNav.appendChild(elNav);

        let linkovi = document.createElement("a");
        linkovi.innerHTML="Dodaj planinarsko drustvo";
        linkovi.className="stilLinkovi";
        linkovi.classList.add("StilZaDodajDrustvo");
        linkovi.href="#";
        linkovi.onclick=(ev) => {
            this.crtajNovuStranuZaDodavanjeDrustva();
        }
        elNav.appendChild(linkovi);


        elNav = document.createElement("li");
        divZaNav.appendChild(elNav);

        linkovi = document.createElement("a");
        linkovi.innerHTML="Dodaj planinu";
        linkovi.className="stilLinkovi";
        linkovi.classList.add("StilZaDodajPlaninu");
        linkovi.href="#";
        linkovi.onclick=(ev) => {
            this.crtajNovuStranuZaDodavanjePlanine();
        }
        elNav.appendChild(linkovi);

        

        let baner = document.createElement("div");
        baner.classList.add("banner");
        this.kontejner.appendChild(baner);
        

        let kontForma = document.createElement("div");
        kontForma.className = "Forma";
        this.kontejner.appendChild(kontForma);


        this.listaplaninarskihDrustva.forEach(drustvo => {
            this.crtajPrikaz(kontForma,drustvo);
        });

    }

    crtajNovuStranuZaDodavanjePlanine(){
        let glavniKontej = document.querySelector(".GlavniKontejner");
        console.log(glavniKontej);
        while(glavniKontej.firstChild){
            glavniKontej.removeChild(glavniKontej.firstChild);
        }
        glavniKontej.classList.add("PlaninaAdd");

        let divZaPozadinuStranePlanine=document.createElement("div");
        divZaPozadinuStranePlanine.className="divZaPozadinuStranePlanine";
        glavniKontej.appendChild(divZaPozadinuStranePlanine);


        let divZaDodavanjePlanine = document.createElement("div");
        divZaDodavanjePlanine.className="divZaDodavanjePlanine";
        divZaPozadinuStranePlanine.appendChild(divZaDodavanjePlanine);


        let Naslov = document.createElement("h2");
        Naslov.innerHTML="DODAVANJE PLANINE";
        Naslov.className="Naslov";
        divZaDodavanjePlanine.appendChild(Naslov);



        let divZaFormuUnosaPlanine = document.createElement("div");
        divZaFormuUnosaPlanine.className = "divZaFormuUnosaPlanine";
        divZaDodavanjePlanine.appendChild(divZaFormuUnosaPlanine);


        let divZaOba = document.createElement("div");
        divZaOba.className="divZaObaDivaPlanina";
        divZaFormuUnosaPlanine.appendChild(divZaOba);

    

        let divImePlanine=document.createElement("input");
        divImePlanine.placeholder="Ime";
        divImePlanine.className="divImePlanine";
        divImePlanine.type="text";
        divZaOba.appendChild(divImePlanine);


        divZaOba = document.createElement("div");
        divZaOba.className="divZaObaDivaPlanina";
        divZaFormuUnosaPlanine.appendChild(divZaOba);

        

        let divDrzavaPlanine=document.createElement("input");
        divDrzavaPlanine.placeholder="Drzava";
        divDrzavaPlanine.className="divDrzavaPlanine";
        divDrzavaPlanine.type="text";
        divZaOba.appendChild(divDrzavaPlanine);



        divZaOba = document.createElement("div");
        divZaOba.className="divZaObaDivaPlanina";
        divZaFormuUnosaPlanine.appendChild(divZaOba);

        

        let divMaxVisinaPlanine=document.createElement("input");
        divMaxVisinaPlanine.placeholder="Maksimalna visina";
        divMaxVisinaPlanine.className="divMaxVisinaPlanine";
        divMaxVisinaPlanine.type="number";
        divZaOba.appendChild(divMaxVisinaPlanine);



        divZaOba = document.createElement("div");
        divZaOba.className="divZaObaDivaPlanina";
        divZaFormuUnosaPlanine.appendChild(divZaOba);

        

        let divImeVrhaPlanine=document.createElement("input");
        divImeVrhaPlanine.placeholder="Ime vrha";
        divImeVrhaPlanine.className="divImeVrhaPlanine";
        divImeVrhaPlanine.type="text";
        divZaOba.appendChild(divImeVrhaPlanine);


        divZaOba = document.createElement("div");
        divZaOba.className="divZaObaDivaPlanina";
        divZaFormuUnosaPlanine.appendChild(divZaOba);

        

        let divTezinaPlanine=document.createElement("input");
        divTezinaPlanine.placeholder="Tezina";
        divTezinaPlanine.className="divTezinaPlanine";
        divTezinaPlanine.type="number";
        divZaOba.appendChild(divTezinaPlanine);

        divZaOba = document.createElement("div");
        divZaOba.className="divDugmiciDodavanjePlan";
        divZaFormuUnosaPlanine.appendChild(divZaOba);

        let dugmeZaDodavanje = document.createElement("button");
        dugmeZaDodavanje.innerHTML="Dodaj";
        dugmeZaDodavanje.className="dugmeZaDodavanje";
        dugmeZaDodavanje.onclick=(ev) => {
            this.dodajPlaninu();
            glavniKontej.classList.remove("PlaninaAdd");
            while(glavniKontej.firstChild){
                glavniKontej.removeChild(glavniKontej.firstChild);
            }
            
            this.crtaj(glavniKontej);
            
        };
        divZaOba.appendChild(dugmeZaDodavanje);

        let dugmeOdustaniOdDodavanja = document.createElement("button");
        dugmeOdustaniOdDodavanja.innerHTML="Otkazi";
        dugmeOdustaniOdDodavanja.className="dugmeOdustaniOdDodavanja";
        dugmeOdustaniOdDodavanja.onclick=(ev) => {
            glavniKontej.classList.remove("PlaninaAdd");
            while(glavniKontej.firstChild){
                glavniKontej.removeChild(glavniKontej.firstChild);
            }
            this.crtaj(glavniKontej);
        };
        divZaOba.appendChild(dugmeOdustaniOdDodavanja);

    }


    crtajNovuStranuZaDodavanjeDrustva(){

        let glavniKon = document.querySelector(".GlavniKontejner");
        console.log(glavniKon)
        while(glavniKon.firstChild){
            glavniKon.removeChild(glavniKon.firstChild);
        }
        glavniKon.classList.add("DrustvoAdd");

        let divZaDodavanjeDrustva = document.createElement("div");
        divZaDodavanjeDrustva.className="divZaDodavanjeDrustva";
        glavniKon.appendChild(divZaDodavanjeDrustva);

        let pomocniDiv = document.createElement("div");
        pomocniDiv.classList.add("pomocniDiv");
        divZaDodavanjeDrustva.appendChild(pomocniDiv);

        let Nas = document.createElement("h2");
        Nas.innerHTML="KREIRANJE PLANINARSKOG DRUSTVA";
        Nas.className="Nas";
        pomocniDiv.appendChild(Nas);


        let divZaFormuUnosa = document.createElement("div");
        divZaFormuUnosa.className = "divZaFormuUnosaDrustva";
        pomocniDiv.appendChild(divZaFormuUnosa);

        let divZaOba = document.createElement("div");
        divZaOba.className="divZaObaDiva";
        divZaFormuUnosa.appendChild(divZaOba);

        

        let divImeDrustva=document.createElement("input");
        divImeDrustva.placeholder="Ime";
        divImeDrustva.className="divImeDrustva";
        divImeDrustva.type="text";
        divZaOba.appendChild(divImeDrustva);



        divZaOba = document.createElement("div");
        divZaOba.className="divZaObaDiva";
        divZaFormuUnosa.appendChild(divZaOba);

        

        let divGradDrustva=document.createElement("input");
        divGradDrustva.placeholder="Grad";
        divGradDrustva.className="divGradDrustva";
        divGradDrustva.type="text";
        divZaOba.appendChild(divGradDrustva);



        divZaOba = document.createElement("div");
        divZaOba.className="divZaObaDiva";
        divZaFormuUnosa.appendChild(divZaOba);

        
        let divDrzavaDrustva=document.createElement("input");
        divDrzavaDrustva.placeholder="Drzava";
        divDrzavaDrustva.className="divDrzavaDrustva";
        divDrzavaDrustva.type="text";
        divZaOba.appendChild(divDrzavaDrustva);



        divZaOba = document.createElement("div");
        divZaOba.className="divZaObaDiva";
        divZaFormuUnosa.appendChild(divZaOba);

        

        let divClanarinaDrustva=document.createElement("input");
        divClanarinaDrustva.placeholder="Clanarina";
        divClanarinaDrustva.className="divClanarinaDrustva";
        divClanarinaDrustva.type="number";
        divZaOba.appendChild(divClanarinaDrustva);


        divZaOba = document.createElement("div");
        divZaOba.className="divZaDugmiceZaDodavanjeDrustva";
        divZaFormuUnosa.appendChild(divZaOba);

        

        let dugmeZaDodavanje = document.createElement("button");
        dugmeZaDodavanje.innerHTML="Dodaj";
        dugmeZaDodavanje.className="dugmeZaDodavanje";
        dugmeZaDodavanje.onclick=(ev) => {
            this.dodajDrustvoIzForme();
            glavniKon.classList.remove("DrustvoAdd");
            while(glavniKon.firstChild){
                glavniKon.removeChild(glavniKon.firstChild);
            }
            this.crtaj(glavniKon);
            
        };
        divZaOba.appendChild(dugmeZaDodavanje);

        let dugmeOdustaniOdDodavanja = document.createElement("button");
        dugmeOdustaniOdDodavanja.innerHTML="Otkazi";
        dugmeOdustaniOdDodavanja.className="dugmeOdustaniOdDodavanja";
        dugmeOdustaniOdDodavanja.onclick=(ev) => {
            glavniKon.classList.remove("DrustvoAdd");
            while(glavniKon.firstChild){
                glavniKon.removeChild(glavniKon.firstChild);
            }
            this.crtaj(glavniKon);
        };
        divZaOba.appendChild(dugmeOdustaniOdDodavanja);

    }

    crajNovuStranuZaDodavanjeDogadjaja(drustvo){

        let glavn = document.querySelector(".GlavniKontejner");
        console.log(glavn)
        while(glavn.firstChild){
            glavn.removeChild(glavn.firstChild);
        }
        glavn.classList.add("DogadjajAdd");

        let pozadinaDivDog = document.createElement("div");
        pozadinaDivDog.className="pozadinaDivDog";
        glavn.appendChild(pozadinaDivDog);

        let pDivv = document.createElement("div");
        pDivv.className="pDivv";
        pozadinaDivDog.appendChild(pDivv);


        let naslovZaDodavanjeDrustva = document.createElement("h2");
        naslovZaDodavanjeDrustva.className="naslovZaDodavanjeDogadjaja";
        naslovZaDodavanjeDrustva.innerHTML="DODAVANJE DOGADJAJA";
        pDivv.appendChild(naslovZaDodavanjeDrustva);

        let divZaFormuUnosa = document.createElement("div");
        divZaFormuUnosa.className = "divZaFormuUnosa";
        pDivv.appendChild(divZaFormuUnosa);

        let divZaOba = document.createElement("div");
        divZaOba.className="divZaOba";
        divZaFormuUnosa.appendChild(divZaOba);

        let div1 = document.createElement("div");
        div1.className="div11";
        divZaOba.appendChild(div1);

        let div2 = document.createElement("div");
        div2.className="div22";
        divZaOba.appendChild(div2);


        let lblImeDog = document.createElement("label");
        lblImeDog.innerHTML="Ime dogadjaja:";
        lblImeDog.className="lblImeDog";
        div1.appendChild(lblImeDog);

        let divImeDog=document.createElement("input");
        divImeDog.placeholder="Ime";
        divImeDog.className="divImeDog";
        divImeDog.type="text";
        div2.appendChild(divImeDog);



        


        let lblImeVrha = document.createElement("label");
        lblImeVrha.innerHTML="Ime vrha:";
        lblImeVrha.className="lblImeVrha";
        div1.appendChild(lblImeVrha);

        let divImeVrha=document.createElement("input");
        divImeVrha.placeholder="Ime vrha";
        divImeVrha.className="divImeVrha";
        divImeVrha.type="text";
        div2.appendChild(divImeVrha);


        


        let lblDatum = document.createElement("label");
        lblDatum.innerHTML="Datum:";
        lblDatum.className="lblDatum";
        div1.appendChild(lblDatum);

        let divDatum=document.createElement("input");
        divDatum.className="divDatum";
        divDatum.type="date";
        div2.appendChild(divDatum);



        

        let lblPlanina = document.createElement("label");
        lblPlanina.innerHTML="Planina:";
        lblPlanina.className="lblPlanina";
        div1.appendChild(lblPlanina);

        let divPlanina=document.createElement("select");
        divPlanina.className="divPlanina";
        div2.appendChild(divPlanina);

        let op;
        this.listaPlanina.forEach(planina => {
            op=document.createElement("option");
            op.innerHTML=planina.ImePlanine;
            op.value=planina.IDPlanine;
            divPlanina.appendChild(op);
        });



        


        let lblTezina = document.createElement("label");
        lblTezina.innerHTML="Tezina:";
        lblTezina.className="lblTezina";
        div1.appendChild(lblTezina);

        let divTezina=document.createElement("input");
        divTezina.placeholder="Tezina";
        divTezina.className="divTezina";
        divTezina.type="number";
        div2.appendChild(divTezina);



        


        let lblBrojUcesnika = document.createElement("label");
        lblBrojUcesnika.innerHTML="Broj ucesnika:";
        lblBrojUcesnika.className="lblBrojUcesnika";
        div1.appendChild(lblBrojUcesnika);

        let divBrojUcesnika=document.createElement("input");
        divBrojUcesnika.placeholder="Broj ucesnika";
        divBrojUcesnika.className="divBrojUcesnika";
        divBrojUcesnika.type="number";
        div2.appendChild(divBrojUcesnika);


       

        let div22 = document.createElement("div");
        div22.className="div22div11dugmici";
        pDivv.appendChild(div22);


        let dugmeZaDodavanje = document.createElement("button");
        dugmeZaDodavanje.innerHTML="Dodaj";
        dugmeZaDodavanje.className="dugmeZaDodavanje";
        dugmeZaDodavanje.onclick=(ev) => {
            this.DodajDogadjajZaDrustvo(drustvo);
            glavn.classList.remove("DogadjajAdd");
            while(glavn.firstChild){
                glavn.removeChild(glavn.firstChild);
            }
            this.crtaj(glavn);
            
        };
        div22.appendChild(dugmeZaDodavanje);

        let dugmeOdustaniOdDodavanja = document.createElement("button");
        dugmeOdustaniOdDodavanja.innerHTML="Otkazi";
        dugmeOdustaniOdDodavanja.className="dugmeOdustaniOdDodavanja";
        dugmeOdustaniOdDodavanja.onclick=(ev) => {
            glavn.classList.remove("DogadjajAdd");
            while(glavn.firstChild){
                glavn.removeChild(glavn.firstChild);
            }
            this.crtaj(glavn);
        };
        div22.appendChild(dugmeOdustaniOdDodavanja);

    }

    crtajRed(host){

        let red = document.createElement("div");
        red.className="red";
        host.appendChild(red);
        return red;
    }

    dodajPrikazZaTabeluDogadjaj(drustvo)
    {
        let tabela = document.querySelector(".tabela" + drustvo.imePlaninarskogDrustva);
        while(tabela.hasChildNodes())
        {
            tabela.removeChild(tabela.firstChild);
        }
        

        let tr = document.createElement("tr");
        tr.className="zaglavlje";
        tabela.appendChild(tr);


        let zaglavlje;
        let th;
        zaglavlje = ["IME DOGADJAJA", "VRH", "DATUM", "PLANINA", "TEZINA", "BROJ UCESNIKA"];
        zaglavlje.forEach(el => {
            th = document.createElement("th");
            th.innerHTML=el;
            tr.appendChild(th);
        })
    }

    dodajPrikazZaTabeluPlaninar(drustvo)
    {
        let tabela = document.querySelector(".tabela" + drustvo.imePlaninarskogDrustva);
        while(tabela.hasChildNodes())
        {
            tabela.removeChild(tabela.firstChild);
        }

        
        let tr = document.createElement("tr");
        tr.className="zaglavlje";
        tabela.appendChild(tr);

        

        let th;
        let zaglavlje = ["JMBG", "IME", "PREZIME", "GRAD", "DRZAVA", "SPREMNOST"];
        zaglavlje.forEach(el => {
            th = document.createElement("th");
            th.innerHTML=el;
            tr.appendChild(th);
        })

    }

    crtajPrikaz(host,drustvo){


        let glavniPrikaz = this.crtajRed(host);
        glavniPrikaz.className="GlavniPrikaz";
        glavniPrikaz.classList.add(drustvo.imePlaninarskogDrustva);
        
        let podDiv = document.createElement("div");
        podDiv.className="podDiv";
        glavniPrikaz.appendChild(podDiv);

        let divZaNaslovDrus = this.crtajRed(podDiv);
        divZaNaslovDrus.classList.add("divZaNaslovDrus");

        let kontrola=this.crtajRed(podDiv);
        kontrola.classList.add("Kontrola");

        let divovi = document.createElement("div");
        divovi.className="zaLevuStranu";
        divZaNaslovDrus.appendChild(divovi);

        
        //naslov
        let naslov = document.createElement("h2");
        naslov.classList.add("h2" + drustvo.imePlaninarskogDrustva)
        naslov.innerHTML=drustvo.imePlaninarskogDrustva + ":";
        divovi.appendChild(naslov);

        
        let divovi1 = document.createElement("div");
        divovi1.className="zaDesnuStranu";
        divZaNaslovDrus.appendChild(divovi1);

        let pom;
       
        let pom1 = document.createElement("div");
        pom1.className="pom1";
        divovi1.appendChild(pom1);

        //broj clana
        let labela = document.createElement("label");
        labela.innerHTML="Broj clana:";
        labela.className="labelaBrojClana";
        pom1.appendChild(labela);

        let brojCl = document.createElement("label");
        brojCl.innerHTML=drustvo.brojClana;
        brojCl.className="BrojClanaVrednost";
        pom1.appendChild(brojCl);


        let pom2 = document.createElement("div");
        pom2.className="pom2";
        divovi1.appendChild(pom2);


            //clanarina
        let clanarina = document.createElement("label");
        clanarina.innerHTML="Clanarina:";
        clanarina.className="ClanarinaLabela";
        pom2.appendChild(clanarina);

        let clanarinaVrednost = document.createElement("label");
        clanarinaVrednost.innerHTML=drustvo.clanarina;
        clanarinaVrednost.className="ClanarinaVrednost";
        pom2.appendChild(clanarinaVrednost);
        

        let d = this.crtajRed(kontrola);
        d.classList.add("prviDiv");

        pom = document.createElement("div");
        pom.classList.add("prvoDugme");
        d.appendChild(pom);


        //dugme dodaj
        let dugmeDodaj=document.createElement("button");
        dugmeDodaj.innerHTML="Dodaj planinara";
        dugmeDodaj.className="DodajDugme";
        dugmeDodaj.onclick=(ev) => {
            this.novaStranaZaDodavanjePlaninara(drustvo);
        };
        pom.appendChild(dugmeDodaj);
        

        pom = document.createElement("div");
        pom.classList.add("drugoDugme");
        d.appendChild(pom);


        let dugmeIzmeniDatum=document.createElement("button");
        dugmeIzmeniDatum.innerHTML="Obrisi dogadjaj";
        dugmeIzmeniDatum.className="ObrisiDogadjajDugme";
        dugmeIzmeniDatum.onclick=(ev) => {
            this.obrisiDogadjaj(drustvo);
        };
        pom.appendChild(dugmeIzmeniDatum);
        
        pom = document.createElement("div");
        pom.classList.add("treceDugme");
        d.appendChild(pom);


        //dugme izmeni planinara
        let dugmeIzmeniPlaninara=document.createElement("button");
        dugmeIzmeniPlaninara.innerHTML="Izmeni planinara";
        dugmeIzmeniPlaninara.className="IzmeniPlaninaraDugme";
        dugmeIzmeniPlaninara.onclick=(ev) => {
            this.IzmeniPlaninara(drustvo);
            
            
        };
        pom.appendChild(dugmeIzmeniPlaninara);

        let drugiDiv = document.createElement("div");
        drugiDiv.className="drugiDiv";
        kontrola.appendChild(drugiDiv);

        pom = document.createElement("div");
        pom.className="cetvrtoDugme";
        drugiDiv.appendChild(pom);


        //dugme dodaj dogadjaj
        let dodajDogadjajZaDrustvo = document.createElement("button");
        dodajDogadjajZaDrustvo.innerHTML="Dodaj dogadjaj";
        dodajDogadjajZaDrustvo.classList.add("DodajDogadjajDugme");
        pom.appendChild(dodajDogadjajZaDrustvo);
        dodajDogadjajZaDrustvo.onclick=(ev) => {
            this.crajNovuStranuZaDodavanjeDogadjaja(drustvo);
        }

        pom = document.createElement("div");
        pom.className="petoDugme";
        drugiDiv.appendChild(pom);


        //dugme obrisi
        let dugmeObrisi=document.createElement("button");
        dugmeObrisi.innerHTML="Obrisi planinara";
        dugmeObrisi.className="ObrisiDugme";
        dugmeObrisi.onclick=(ev) => {
            this.ObrisiPlaninaraIzDrustva(drustvo);
            this.dodajPrikazZaTabeluPlaninar(drustvo);
        };
        pom.appendChild(dugmeObrisi);


        pom = document.createElement("div");
        pom.className="sestoDugme";
        drugiDiv.appendChild(pom);


        //dugme prikazi dogadjaje
        let dugmePriaziDogadjaje=document.createElement("button");
        dugmePriaziDogadjaje.innerHTML="Prikazi dogadjaje";
        dugmePriaziDogadjaje.className="PrikaziDogadjajeDugme";
        dugmePriaziDogadjaje.onclick=(ev) => {
            this.nadjiDogadjajeDrustva(drustvo);
            this.dodajPrikazZaTabeluDogadjaj(drustvo);
        };
        pom.appendChild(dugmePriaziDogadjaje);
    


        let treciDiv = document.createElement("div");
        treciDiv.className="treciDiv";
        kontrola.appendChild(treciDiv);


        pom = document.createElement("div");
        pom.classList.add("sedmoDugme");
        treciDiv.appendChild(pom);


        //dugme prikazi clanove
        let dugmePrikaziPlaninare=document.createElement("button");
        dugmePrikaziPlaninare.innerHTML="Prikazi clanove";
        dugmePrikaziPlaninare.className="PrikaziClanoveDugme";
        dugmePrikaziPlaninare.onclick=(ev) => {
            this.ucitajPlaninareKojiPripadajuDrustvu(drustvo);
            this.dodajPrikazZaTabeluPlaninar(drustvo);
        };
        pom.appendChild(dugmePrikaziPlaninare);


        pom = document.createElement("div");
        pom.classList.add("tabela" + drustvo.imePlaninarskogDrustva);
        pom.classList.add("sP");
        kontrola.appendChild(pom);
        
    }

    novaStranaZaDodavanjePlaninara(drustvo){

        let glavni = document.querySelector(".GlavniKontejner");
        console.log(glavni);
        while(glavni.firstChild){
            glavni.removeChild(glavni.firstChild);
        }
        glavni.classList.add("Korisnik")
        let formaZaUnosPlaninara = document.createElement("div");
        formaZaUnosPlaninara.classList.add("formaZaUnosPlaninara");
        glavni.appendChild(formaZaUnosPlaninara);

        let divElement1 = document.createElement("div");
        divElement1.classList.add("belaPozadina");
        formaZaUnosPlaninara.appendChild(divElement1);
    

        let naslov = document.createElement("h2");
        naslov.innerHTML="Registracija";
        naslov.className="naslovRegistracijeKorisnika";
        divElement1.appendChild(naslov);

        let divZaReigsraciju = document.createElement("div");
        divZaReigsraciju.classList.add("reg");
        divElement1.appendChild(divZaReigsraciju);

        let tata = document.createElement("div");
        tata.className="tata";
        divZaReigsraciju.appendChild(tata);

        let divcic1 = document.createElement("div");
        divcic1.className="divcic1";
        tata.appendChild(divcic1);

        let divcic2 = document.createElement("div");
        divcic2.className="divcic2";
        tata.appendChild(divcic2);



        let lblIme = document.createElement("label");
        lblIme.innerHTML="Ime:";
        lblIme.className="labelaIme";
        lblIme.classList.add("StilZaSlovaRegistracija");
        divcic1.appendChild(lblIme);

        let unosIme = document.createElement("input");
        unosIme.type="text";
        unosIme.className="unosIme";
        unosIme.classList.add("stilZaUnose");
        divcic2.appendChild(unosIme);



        let lblPrezime = document.createElement("label");
        lblPrezime.innerHTML="Prezime:";
        lblPrezime.classList.add("StilZaSlovaRegistracija");
        lblPrezime.classList.add("labelaPrezime");
        divcic1.appendChild(lblPrezime);

        let unosPrezime = document.createElement("input");
        unosPrezime.type="text";
        unosPrezime.classList.add("unosPrezime");
        unosPrezime.classList.add("stilZaUnose");
        divcic2.appendChild(unosPrezime);


        let lblJMBG = document.createElement("label");
        lblJMBG.innerHTML="JMBG:";
        lblJMBG.classList.add("StilZaSlovaRegistracija");
        lblJMBG.classList.add("labelaJMBG");
        divcic1.appendChild(lblJMBG);

        let unosJMBG = document.createElement("input");
        unosJMBG.type="number";
        unosJMBG.classList.add("unosJMBG");
        unosJMBG.classList.add("stilZaUnose");
        divcic2.appendChild(unosJMBG);



        let lblSpremnost = document.createElement("label");
        lblSpremnost.innerHTML="Spremnost:";
        lblSpremnost.classList.add("StilZaSlovaRegistracija");
        lblSpremnost.classList.add("labelaSpremnost");
        divcic1.appendChild(lblSpremnost);

        let unosSpremnost = document.createElement("input");
        unosSpremnost.type="number";
        unosSpremnost.classList.add("unosSpremnost");
        unosSpremnost.classList.add("stilZaUnose");
        divcic2.appendChild(unosSpremnost);


        
        let lblGrad = document.createElement("label");
        lblGrad.innerHTML="Grad:";
        lblGrad.classList.add("StilZaSlovaRegistracija");
        lblGrad.classList.add("labelaGrad");
        divcic1.appendChild(lblGrad);

        let unosGrad = document.createElement("input");
        unosGrad.type="text";
        unosGrad.classList.add("unosGrad");
        unosGrad.classList.add("stilZaUnose");
        divcic2.appendChild(unosGrad);



        let lblDrzava = document.createElement("label");
        lblDrzava.innerHTML="Drzava:";
        lblDrzava.classList.add("StilZaSlovaRegistracija");
        lblDrzava.classList.add("labelaDrzava");
        divcic1.appendChild(lblDrzava);

        let unosDrzava = document.createElement("input");
        unosDrzava.type="text";
        unosDrzava.classList.add("unosDrzava");
        unosDrzava.classList.add("stilZaUnose");
        divcic2.appendChild(unosDrzava);


        let dete  = document.createElement("div");
        dete.className="dete";
        divZaReigsraciju.appendChild(dete);
        

        let d1 = document.createElement("div");
        d1.className="kodPlaninaraDugmici";
        dete.appendChild(d1);
        

        let dugmeZaRegistraciju = document.createElement("button");
        dugmeZaRegistraciju.innerHTML="Registruj se";
        dugmeZaRegistraciju.className="dugmeZaRegistraciju";
        dugmeZaRegistraciju.onclick=(ev) => {
            this.dodajPlaninaraIzForme(drustvo);
            glavni.classList.remove("Korisnik");
            while(glavni.firstChild){
                glavni.removeChild(glavni.firstChild);
            }
            
            this.crtaj(glavni);
        };
        d1.appendChild(dugmeZaRegistraciju);


        d1 = document.createElement("div");
        d1.className="kodPlaninaraDugmici";
        dete.appendChild(d1);


        let dugmeOdustani = document.createElement("button");
        dugmeOdustani.innerHTML="Odustani";
        dugmeOdustani.className="dugmeZaRegistraciju";
        dugmeOdustani.onclick=(ev) => {
            glavni.classList.remove("Korisnik");
            while(glavni.firstChild){
                glavni.removeChild(glavni.firstChild);
            }
            this.crtaj(glavni);
        };
        d1.appendChild(dugmeOdustani);

        
    }
    
    novaStranaZaIzmenuPlaninara(drustvo){
        let glavni = document.querySelector(".GlavniKontejner");
        console.log(glavni);
        while(glavni.firstChild){
            glavni.removeChild(glavni.firstChild);
        }
        glavni.classList.add("Korisnik")
        let formaZaUnosPlaninara = document.createElement("div");
        formaZaUnosPlaninara.classList.add("formaZaUnosPlaninara");
        glavni.appendChild(formaZaUnosPlaninara);

        let divElement1 = document.createElement("div");
        divElement1.classList.add("belaPozadina");
        formaZaUnosPlaninara.appendChild(divElement1);
    

        let naslov = document.createElement("h2");
        naslov.innerHTML="Izmena planinara";
        naslov.className="naslovRegistracijeKorisnika";
        divElement1.appendChild(naslov);

        let divZaReigsraciju = document.createElement("div");
        divZaReigsraciju.classList.add("reg");
        divElement1.appendChild(divZaReigsraciju);

        let tata = document.createElement("div");
        tata.className="tata";
        divZaReigsraciju.appendChild(tata);

        let divcic1 = document.createElement("div");
        divcic1.className="divcic1";
        tata.appendChild(divcic1);

        let divcic2 = document.createElement("div");
        divcic2.className="divcic2";
        tata.appendChild(divcic2);



        let lblIme = document.createElement("label");
        lblIme.innerHTML="Ime planinara:";
        lblIme.className="labelaIme";
        lblIme.classList.add("StilZaSlovaRegistracija");
        divcic1.appendChild(lblIme);

        let unosIme = document.createElement("input");
        unosIme.type="text";
        unosIme.className="unosIme";
        unosIme.classList.add("stilZaUnose");
        divcic2.appendChild(unosIme);



        let lblPrezime = document.createElement("label");
        lblPrezime.innerHTML="Prezime planinara:";
        lblPrezime.classList.add("StilZaSlovaRegistracija");
        lblPrezime.classList.add("labelaPrezime");
        divcic1.appendChild(lblPrezime);

        let unosPrezime = document.createElement("input");
        unosPrezime.tpye="text";
        unosPrezime.classList.add("unosPrezime");
        unosPrezime.classList.add("stilZaUnose");
        divcic2.appendChild(unosPrezime);



        let lblJMBG = document.createElement("label");
        lblJMBG.innerHTML="JMBG planinara:";
        lblJMBG.classList.add("StilZaSlovaRegistracija");
        lblJMBG.classList.add("labelaJMBG");
        divcic1.appendChild(lblJMBG);

        let unosJMBG = document.createElement("input");
        unosJMBG.tpye="number";
        unosJMBG.classList.add("unosJMBG");
        unosJMBG.classList.add("stilZaUnose");
        divcic2.appendChild(unosJMBG);



        let lblSpremnost = document.createElement("label");
        lblSpremnost.innerHTML="Spremnost planinara:";
        lblSpremnost.classList.add("StilZaSlovaRegistracija");
        lblSpremnost.classList.add("labelaSpremnost");
        divcic1.appendChild(lblSpremnost);

        let unosSpremnost = document.createElement("input");
        unosSpremnost.tpye="number";
        unosSpremnost.classList.add("unosSpremnost");
        unosSpremnost.classList.add("stilZaUnose");
        divcic2.appendChild(unosSpremnost);



        let lblGrad = document.createElement("label");
        lblGrad.innerHTML="Grad planinara:";
        lblGrad.classList.add("StilZaSlovaRegistracija");
        lblGrad.classList.add("labelaGrad");
        divcic1.appendChild(lblGrad);

        let unosGrad = document.createElement("input");
        unosGrad.tpye="text";
        unosGrad.classList.add("unosGrad");
        unosGrad.classList.add("stilZaUnose");
        divcic2.appendChild(unosGrad);



        let lblDrzava = document.createElement("label");
        lblDrzava.innerHTML="Drzava planinara:";
        lblDrzava.classList.add("StilZaSlovaRegistracija");
        lblDrzava.classList.add("labelaDrzava");
        divcic1.appendChild(lblDrzava);

        let unosDrzava = document.createElement("input");
        unosDrzava.tpye="text";
        unosDrzava.classList.add("unosDrzava");
        unosDrzava.classList.add("stilZaUnose");
        divcic2.appendChild(unosDrzava);


        let dete  = document.createElement("div");
        dete.className="dete";
        divZaReigsraciju.appendChild(dete);
        

        let d1 = document.createElement("div");
        d1.className="kodPlaninaraDugmici";
        dete.appendChild(d1);
        

        let dugmeZaRegistraciju = document.createElement("button");
        dugmeZaRegistraciju.innerHTML="Izmeni";
        dugmeZaRegistraciju.className="dugmeZaRegistraciju";
        dugmeZaRegistraciju.onclick=(ev) => {
            this.IzmeniPlaninaraIzForme(drustvo);
            glavni.classList.remove("Korisnik");
            while(glavni.firstChild){
                glavni.removeChild(glavni.firstChild);
            }
            
            this.crtaj(glavni);
        };
        d1.appendChild(dugmeZaRegistraciju);


        d1 = document.createElement("div");
        d1.className="kodPlaninaraDugmici";
        dete.appendChild(d1);


        let dugmeOdustani = document.createElement("button");
        dugmeOdustani.innerHTML="Odustani";
        dugmeOdustani.className="dugmeZaRegistraciju";
        dugmeOdustani.onclick=(ev) => {
            glavni.classList.remove("Korisnik");
            while(glavni.firstChild){
                glavni.removeChild(glavni.firstChild);
            }
            this.crtaj(glavni);
        };
        d1.appendChild(dugmeOdustani);
    }


    nadjiDogadjajeZaPlaninara(){

        let optionEl = this.kontejner.querySelector(".PlaninarSelect");
        let planinarID = optionEl.options[optionEl.selectedIndex].value;
        console.log(planinarID);

        this.ucitajDogadjajeZaPlaninare(planinarID);
    }

    ucitajDogadjajeZaPlaninare(planinarID){

        fetch("https://localhost:5001/Dogadjaj/PreuzmiDogadjajeZaPlaninara/" + planinarID,{
            method: "GET"
        }).then(s => {
            if(s.ok)
            {
                let teloTabele = document.getElementById("glavnaTabela");
                s.json().then(data => {
                    data.forEach(p => {
                        let bl = new Dogadjaj(p.id, p.imeDogadjaja, p.vrh, p.datum, p.planina, p.tezina, p.brojUcesnika);
                        bl.crtaj(teloTabele);
                    })
                })
            }
        })
    }


    nadjiDogadjajeDrustva(drustvo){

        fetch("https://localhost:5001/PlaninarskoDrustvo/PrezumiDogadjajeZaDrustvo/" + drustvo.iDPlaninarskogDrustva,{
            method: "GET"
        }).then(s => {
            if(s.ok)
            {
                let teloTabele = document.querySelector(".tabela" + drustvo.imePlaninarskogDrustva);
                s.json().then(data => {
                    data.forEach(p => {
                        let dg = new Dogadjaj(p.id,p.imeDogadjaja,p.vrh,p.datum,p.planina,p.tezina,p.brojUcesnika);
                        dg.crtaj(teloTabele,drustvo);
                    })
                })
            }
        })
    }

    ucitajPlaninareKojiPripadajuDrustvu(drustvo){

        fetch("https://localhost:5001/Planinar/PreuzmiPlaninareIzPlaninarskogDrustva/" + drustvo.iDPlaninarskogDrustva,{
            method: "GET"
        }).then(s => {
            if(s.ok)
            {
                let teloTabele = document.querySelector(".tabela" + drustvo.imePlaninarskogDrustva);
                s.json().then(data => {
                    data.forEach(p => {
                        let pl = new Planinar(p.id, p.ime, p.prezime, p.jmbg, p.spremnost, p.grad, p.drzava);
                        pl.crtaj(teloTabele,drustvo);
                    })
                })
            }
        })
    }

    dodajPlaninaraIzForme(drustvo){

        let imeU = document.querySelector(".unosIme");
        if(imeU===null)
        {
            alert("Ime ne sme da bude prazno polje!");
        }
        let ime = imeU.value;
        
        let prezimeU = document.querySelector(".unosPrezime");
        if(prezimeU===null)
        {
            alert("Prezime ne sme da bude prazno polje!");
        }
        let JMBGU = document.querySelector(".unosJMBG");
        if(JMBGU===null)
        {
            alert("JMBG ne sme da bude prazno polje!");
        }
        let spremnostU = document.querySelector(".unosSpremnost");
        if(spremnostU===null)
        {
            alert("Spremnost ne sme da bude prazno polje!");
        }
        let gradU = document.querySelector(".unosGrad");
        if(gradU===null)
        {
            alert("Grad ne sme da bude prazno polje!");
        }
        let drzavaU = document.querySelector(".unosDrzava");
        if(drzavaU===null)
        {
            alert("Drazava ne sme da bude prazno polje!");
        }
        let prezime = prezimeU.value;
        let jmbg = JMBGU.value;
        let spremnost = spremnostU.value;
        let grad = gradU.value;
        let drzava = drzavaU.value;
        console.log(drzava);
        this.dodajPlaninaraDobijeniParametri(ime,prezime,jmbg,spremnost,grad,drzava,drustvo);
    }

    dodajPlaninaraDobijeniParametri(ime,prezime,jmbg,spremnost,grad,drzava,drustvo){

        fetch("https://localhost:5001/PlaninarskoDrustvo/DodajPlaninaraUPlaninarskoDrustvo/"+ime+"/"+prezime+"/"+jmbg+"/"+spremnost+"/"+grad+"/"+drzava+"/"+drustvo.iDPlaninarskogDrustva,{
            method:"POST"
        }).then(s => {
            if(s.ok)
            {
                let teloTabele = document.querySelector(".tabela" + drustvo.imePlaninarskogDrustva);
                s.json().then(data => {
                    data.forEach(p => {
                        let pl = new Planinar(p.id, p.ime, p.prezime, p.jmbg, p.spremnost, p.grad, p.drzava);
                        pl.crtaj(teloTabele,drustvo);
                    })
                })
                alert("Uspesno je dodat planinar u drustvo:" + drustvo.imePlaninarskogDrustva);
                
            }
            else{
                s.text().then(data => {
                    alert(data);
                });
            }
        }).catch(ps => alert(ps));
    }


    obrisiDogadjaj(drustvo){
        
        let selRed = this.kontejner.querySelector(".selRed");
        console.log(selRed);
        if(selRed==null)
        {
            window.alert("Nije selektovan dogadjaj za brisanje");
        }

        fetch("https://localhost:5001/Dogadjaj/IzbrisiDogadjaj/"+drustvo.iDPlaninarskogDrustva+"/"+selRed.value,{
            method:"DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        }).then(s => {
            if(s.ok){
                s.json().then(data => {
                    data.forEach(p => {
                        let pl = new Dogadjaj(p.id, p.imeDogadjaja, p.vrh, p.datum, p.planina, p.tezina, p.brojUCesnika);
                        pl.crtaj(teloTabele,drustvo);
                    })
                })
                
                alert("Uspesno izbrisan dogadjaj!");
            }
            else{
                s.text().then(data => {
                    alert(data);
                });
            }
        }).catch(ps => alert(ps));
    }

    ObrisiPlaninaraIzDrustva(drustvo){

        let selRe = this.kontejner.querySelector(".selektovanRed");
        console.log(selRe);
        if(selRe===null)
        {
            window.alert("Nije selektovan planinar koji zelite da obrisete!!!");
        }
        

        fetch("https://localhost:5001/Planinar/IzbrisiPlaninara/"+drustvo.iDPlaninarskogDrustva+"/"+selRe.value,{
            method:"DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        }).then(s => {
            if(s.ok){
                s.json().then(data => {
                    data.forEach(p => {
                        let pl = new Planinar(p.id, p.ime, p.prezime, p.jmbg, p.spremnost, p.grad, p.drzava);
                        pl.crtaj(teloTabele,drustvo);
                    })
                })
                location.reload();
                alert("Uspesno izbrisan planinar");
                
            }
            else{
                s.text().then(data => {
                    alert(data);
                });
            }
        }).catch(ps => alert(ps));
    }

    DodajDogadjajZaDrustvo(drustvo){
        //ImeVrhaDogadjajaUnos DatumDogadjajaUnos PlaninaDogadjajaSelect TezinaDogadjajaUnos BrojUcesnikaDogadjajaUnos

        let imeDogU = this.kontejner.querySelector(".divImeDog");
        console.log(imeDogU);
        if(imeDogU===null)
        {
            alert("Ime dogadjaja ne sme da bude prazno polje!");
        }
        let imeDog = imeDogU.value;
        console.log(imeDog);

        let imeVrhaU = this.kontejner.querySelector(".divImeVrha");
        if(imeVrhaU===null)
        {
            alert("Ime vrha ne sme da bude prazno polje!");
        }
        let imeVrha = imeVrhaU.value;
        console.log(imeVrha);

        let datumU = this.kontejner.querySelector(".divDatum");
        if(datumU===null)
        {
            alert("Datum ne sme da bude prazno polje!");
        }
        let datum = datumU.value;
        console.log(datum);

        let planinaU = this.kontejner.querySelector(".divPlanina");
        if(planinaU===null)
        {
            alert("Planina dogadjaja ne sme da bude prazno polje!");
        }
        let planina = planinaU.options[planinaU.selectedIndex].value;
        console.log(planina);

        let tezinaU = this.kontejner.querySelector(".divTezina");
        if(tezinaU===null)
        {
            alert("Tezina ne sme da bude prazno polje!");
        }
        let tezina = tezinaU.value;
        console.log(tezina);

        let brojUcesnikaU = this.kontejner.querySelector(".divBrojUcesnika");
        if(brojUcesnikaU===null)
        {
            alert("Broj ucesnika ne sme da bude prazno polje!");
        }
        let brojUcesnika = brojUcesnikaU.value;
        console.log(brojUcesnika);
        this.DodajDogadjajZaDrustvoParametri(drustvo, imeDog, imeVrha, datum, planina, tezina, brojUcesnika);
        
    }

    DodajDogadjajZaDrustvoParametri(drustvo, imeDog, imeVrha, datum, planina, tezina, brojUcesnika){

        fetch("https://localhost:5001/Dogadjaj/DodajDogadjajZaDrustvo/" + drustvo.iDPlaninarskogDrustva + "/"+imeDog + "/" + imeVrha + "/" + datum + "/" + planina + "/" + tezina+"/" + brojUcesnika,{
            method:"POST"
        }).then(s => {
            if(s.ok){
                let teloTabele = document.querySelector(".tabela" + drustvo.imePlaninarskogDrustva);
                s.json().then(data => {
                    data.forEach(pl => {
                        const dg = new Dogadjaj(pl.id, pl.imeDogadjaja, pl.imeVrha, pl.datum, pl.planina, pl.tezina, pl.brojUCesnika);
                        dg.crtaj(teloTabele,drustvo);
                    })
                    
                });
                alert("Drustvo " + drustvo.imePlaninarskogDrustva + " organizuje dogadjaj " + imeDog);
            }
            else{
                s.text().then(data => {
                    alert(data);
                });
            }
        }).catch(ps => alert(ps));
    }


    dodajDrustvoIzForme(){

        let imeDogU = document.querySelector(".divImeDrustva");
        if(imeDogU===null)
        {
            alert("Ime dogadjaja ne sme da bude prazno polje!");
        }
        let imeDog = imeDogU.value;
        console.log(imeDog);

        let gradU = document.querySelector(".divGradDrustva");
        if(gradU===null)
        {
            alert("Grad ne sme da bude prazno polje!");
        }
        let grad = gradU.value;
        console.log(grad);

        let drzavaU = document.querySelector(".divDrzavaDrustva");
        if(drzavaU===null)
        {
            alert("Drzava ne sme da bude prazno polje!");
        }
        let drzava = drzavaU.value;
        console.log(drzava);

        let clanarinaU = document.querySelector(".divClanarinaDrustva");
        if(clanarinaU===null)
        {
            alert("Clanarina ne sme da bude prazno polje!");
        }
        let clanarina = clanarinaU.value;
        console.log(clanarina);
        this.dodajDrustvoIzFormeParametri(imeDog,grad,drzava,clanarina);
    }

    dodajDrustvoIzFormeParametri(ime,grad,drzava,clanarina){

        fetch("https://localhost:5001/PlaninarskoDrustvo/DodajPlaninarskoDrustvoParametri/" + ime + "/" + grad + "/" + drzava + "/" + clanarina,{
            method:"POST"
        }).then(s => {
            if(s.ok){
                s.json().then(data => {
                    data.forEach(pl => {
                        const dg = new PlaninarskoDrustvo(pl.imePlaninarskogDrustva, pl.grad, pl.drzava, pl.clanarina);
                    })
                    
                });
                location.reload();
                alert("Dodato je novo planinarsko drustvo ☺");
                
            }
            else{
                s.text().then(data => {
                    alert(data);
                });
            }
        }).catch(ps => alert(ps));

    }

    dodajPlaninu(){

        let imeU = document.querySelector(".divImePlanine");
        if(imeU===null)
        {
            alert("Ime ne sme da bude prazno polje!");
        }
        let ime = imeU.value;
        console.log(ime);

        let drzavaU = document.querySelector(".divDrzavaPlanine");
        if(imeU===null)
        {
            alert("Ime ne sme da bude prazno polje!");
        }
        let drzava = drzavaU.value;
        console.log(drzava);

        let maksimalnaVisinaU = document.querySelector(".divMaxVisinaPlanine");
        if(maksimalnaVisinaU===null)
        {
            alert("Maksimalna visina ne sme da bude prazno polje!");
        }
        let maksimalnaVisina = maksimalnaVisinaU.value;
        console.log(maksimalnaVisina);

        let najvisiVrhU = document.querySelector(".divImeVrhaPlanine");
        if(najvisiVrhU===null)
        {
            alert("Najvisi vrh ne sme da bude prazno polje!");
        }
        let najvisiVrh = najvisiVrhU.value;
        console.log(najvisiVrh);

        let tezinaU = document.querySelector(".divTezinaPlanine");
        if(tezinaU===null)
        {
            alert("Tezina ne sme da bude prazno polje!");
        }
        let tezina = tezinaU.value;
        console.log(tezina);

        this.dodajPlaninuParametri(ime,drzava,maksimalnaVisina,najvisiVrh,tezina);
    }
    
    dodajPlaninuParametri(ime,drzava,maksimalnaVisina,najvisiVrh,tezina){

        fetch("https://localhost:5001/Planina/DodajPlaninuParametri/" + ime + "/" + drzava + "/" + maksimalnaVisina + "/" + najvisiVrh + "/" + tezina,{
            method:"POST"
        }).then(s => {
            if(s.ok){
                s.json().then(data => {
                    data.forEach(pl => {
                        const dg = new Planina(pl.IDPlanine, pl.ime, pl.drzava, pl.maksimalnaVisina, pl.imeNajvisegVrha, pl.tezina);
                    })
                    
                });
                location.reload();
                alert("Uspesno dodata planina " + ime + " ☺");
                
            }
            else{
                s.text().then(data => {
                    alert(data);
                });
            }
        }).catch(ps => alert(ps));
    }

    IzmeniPlaninara(drustvo){

        let selRed = this.kontejner.querySelector(".selektovanRed");
        console.log(selRed.value);
        console.log(drustvo.iDPlaninarskogDrustva);
        if(selRed===null)
        {
            window.alert("Nije selektovan planinar koji zelite da obrisete!!!");
        }
        
        let ime;
        let prezime;
        let jmbg;
        let spremnost;
        let grad;
        let drzava;
        fetch("https://localhost:5001/Planinar/PrezumiPlaninara/" + selRed.value,{
            method: "GET"
        }).then(s => {
            if(s.ok)
            {
                s.json().then(data => {
                        
                        console.log(data);
                        ime = data.ime;
                        prezime=data.prezime;
                        jmbg=data.jmbg;
                        spremnost=data.spremnost;
                        grad=data.grad;
                        drzava=data.drzava;
                        this.fn(drustvo,ime,prezime,jmbg,spremnost,grad,drzava);
                    
                });
                
            }
            else{
                s.text().then(data => {
                    alert(data);
                });
            }
        }).catch(ps => alert(ps));
        
       
    }

    IzmeniPlaninaraIzForme(drustvo){

        let imeU = document.querySelector(".unosIme");
        if(imeU===null)
        {
            alert("Ime ne sme da bude prazno polje!");
        }
        let ime = imeU.value;
        
        let prezimeU = document.querySelector(".unosPrezime");
        if(prezimeU===null)
        {
            alert("Prezime ne sme da bude prazno polje!");
        }
        let JMBGU = document.querySelector(".unosJMBG");
        if(JMBGU===null)
        {
            alert("JMBG ne sme da bude prazno polje!");
        }
        let spremnostU = document.querySelector(".unosSpremnost");
        if(spremnostU===null)
        {
            alert("Spremnost ne sme da bude prazno polje!");
        }
        let gradU = document.querySelector(".unosGrad");
        if(gradU===null)
        {
            alert("Grad ne sme da bude prazno polje!");
        }
        let drzavaU = document.querySelector(".unosDrzava");
        if(drzavaU===null)
        {
            alert("Drzava ne sme da bude prazno polje!");
        }
        let prezime = prezimeU.value;
        let jmbg = JMBGU.value;
        let spremnost = spremnostU.value;
        let grad = gradU.value;
        let drzava = drzavaU.value;

        console.log(ime);
        console.log(prezime);
        console.log(jmbg);
        console.log(spremnost);
        console.log(grad);
        console.log(drzava);
        this.IzmeniPlaninaraIzFormeParamtri(drustvo,ime,prezime,jmbg,spremnost,grad,drzava);
    }

    IzmeniPlaninaraIzFormeParamtri(drustvo,ime,prezime,jmbg,spremnost,grad,drzava){

        fetch("https://localhost:5001/Planinar/PromeniPlaninara/" + ime + "/" + prezime + "/" + jmbg + "/" + spremnost + "/" + grad + "/" + drzava,{
            method:"PUT"
        }).then(s => {
            if(s.ok){
                s.json().then(data => {
                    data.forEach(pl => {
                        let p = new Planinar(p.id, p.ime, p.prezime, p.jmbg, p.spremnost, p.grad, p.drzava);
                        pl.crtaj(teloTabele,drustvo);
                    })
                    
                });
                location.reload();
                alert("Uspesno obavljena izmena ☺");
                
            }
            else{
                s.text().then(data => {
                    alert(data);
                });
            }
        }).catch(ps => alert(ps));
    }

    fn(drustvo,ime,prezime,jmbg,spremnost,grad,drzava)
    {
        console.log(ime);
        console.log(prezime);
        console.log(jmbg);
        console.log(spremnost);
        console.log(grad);
        console.log(drzava);
        this.novaStranaZaIzmenuPlaninara(drustvo);
        let imeU = document.querySelector(".unosIme");
        if(imeU===null)
        {
            alert("Ime ne sme da bude prazno!");
        }
        imeU.value=ime;
        
        let prezimeU = document.querySelector(".unosPrezime");
        if(prezimeU===null)
        {
            alert("Prezime ne sme da bude prazno!");
        }
        prezimeU.value=prezime;
        let JMBGU = document.querySelector(".unosJMBG");
        if(JMBGU===null)
        {
            alert("JMBG ne sme da bude prazno polje!");
        }
        JMBGU.value=jmbg;
        let spremnostU = document.querySelector(".unosSpremnost");
        if(spremnostU===null)
        {
            alert("Spremnost ne sme da bude prazno polje!");
        }
        spremnostU.value=spremnost;
        let gradU = document.querySelector(".unosGrad");
        if(gradU===null)
        {
            alert("Grad ne sme da bude prazno polje!");
        }
        gradU.value=grad;
        let drzavaU = document.querySelector(".unosDrzava");
        if(drzavaU===null)
        {
            alert("Drzava ne sme da bude prazno polje!");
        }
        drzavaU.value=drzava;
        
        console.log(drzavaU.value);
    }

}