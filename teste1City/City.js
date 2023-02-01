export class City {
    name;
    capital;
    country;
    population;
    regions;
    state;

    setInstanceDoc(doc) {
        console.log("DADOS = ", doc.data());
        var c = doc.data();
        this.name = c.name;
        this.population = c.pop;
       // console.log("CITY=", this.name, this.population);
       // console.log("OBJ=> ", `${doc.id} => ${doc.data()} POP: ${c.population}  `);
    }

    getInstanceDoc(){
        var doc = {
            name: this.name,
            capital: false,
            country: "BR",
            population: this.population
        }
        return doc;
    }

}
