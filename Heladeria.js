class Heladeria{
    constructor(tipocono,númerobolas,sabor){
        this.tipocono=tipocono;
        this.númerobolas=númerobolas;
        this.sabor=sabor;
        
    }

    preparar(){
        console.log('Preparando helado ${this.tipocono},${this.sabor},${this.númerobolas}}'
        );
        return this;
    }

    
    empacar(){
        console.log("Empacando el helado...");
        console.log("Su orden esta lista");
    }
}

const heladoFresaconChocolate = new Heladeria ("Cucurucho","2 bolas",["Sabor fresa","Sabor Chocolate","Sabor Vainilla Chips"]);

console.log(heladoFresaconChocolate.preparar());
console.log(heladoFresaconChocolate.empacar());

class Promoción extends Heladeria{
    constructor(Promoción,tipocono,númerobolas,sabor,salsas,chispitas,barquillo){
        super(tipocono,númerobolas,sabor);
        this.Promoción=Promoción;
        this.salsas=salsas;
        this.chispitas=chispitas;
        this.barquillo=barquillo;
    }
    elegirPromoción(){
        this.preparar();
        this.empacar();

        console.log('Pedido: Promoción,${this.Promoción},Helado ${this.tipocono},${this.númerobolas}, + ${this.salsas}+ ${this.chispitas} + ${this.barquillo} ' );
        return this
    }
}
const Pedido = new Promoción ( 1, 'Cucurucho', '3 bolas', ['Fresa', 'Chocolate', 'Vainilla Chips'],'Salsa de mora','Chispitas', 'Barquillos', 1 );
console.log(Pedido.elegirPromoción());