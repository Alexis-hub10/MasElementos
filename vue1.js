Vue.component("saludo", {
    template: "<h1>{{saludo}}</h1>",
    data() {
        return {
            saludo:"Bienvenidos a CUBIC WORLD"
        };
    }
});
Vue.component("contador",{
    template:
    '<div><h3>{{numero}}</h3><button @click="numero++"  class="btn btn-dark">Like</button></div>',
    data(){
        return{
            numero: 0
        };
    }
});
Vue.component("elegir-ganador",{
    props: ['listado','total_bebidas'],
    template: '#elegir-ganador-template',
    methods: {
        elegirGanador(){
            cantidad = this.listado.length;
            indice = Math.floor((Math.random() * cantidad));
            this.ganador = this.listado[indice-1];
        }
    },
    data(){
        return {
            ganador: false,
        };
    }
});
const app = new Vue({
    el:'#listas',
    data:{
        subtitulo:'Bebidas',
        minimo:10,
        busqueda:'',
        busque:'',
        pregunta3:'¿Que bebida llevaras?',
        pregunta4:'¿Que Tamaño?',
        bebidas:[
            {nombre:'licuado de Manzana', ingredientes:'manzana, avena, leche ', tama:'grande', precio:'$40', disponible:'true'},
            {nombre:'cafe', ingredientes:'agua, cafe, azucar', tama:'chico', precio:'$20', disponible:'false'},
            {nombre:'malteada defresa', ingredientes:'fresa, leche, leche condesada', tama:'grande', precio:'$40', disponible:'true'},
            {nombre:'cafe con leche', ingredientes:'agua, cafe, azucar, leche', tama:'chico', precio:'$20', disponible:'false'},
            {nombre:'te negro', ingredientes:'agua, azucar, te', tama:'mediano', precio:'$30', disponible:'true'},
            {nombre:'chocolate', ingredientes:'chocolate, leche caliente, azucar', tama:'mediano', precio:'$30', disponible:'false'},
            {nombre:'frapuccino', ingredientes:'una taza de café preparado (frío), leche, chantilly, azucar, hielo y canela', tama:'mediano', precio:'$30', disponible:'true'}
        ],
        bebid:['licuado de Manzana','cafe','malteada defresa','cafe con leche','te negro','chocolate','frapuccino'],
        vue: {
			m: '',
            t: '',
            agre:'',
		},
    },
    computed:{
		
		buscarBebi(){
			return this.bebidas.filter((bebida)=> bebida.nombre.includes(this.busqueda));
        },
        buscarBebida(){
			return this.bebidas.filter((bebi)=> bebi.precio.includes(this.busque));
        },
    }
});

const app2 = new Vue({
    el:'#footer',
    data:{
        autor:'BarajasAlexis',
    },
})
document.getElementById('footer').style.backgroundColor="black";