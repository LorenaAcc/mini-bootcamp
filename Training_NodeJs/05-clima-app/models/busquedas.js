
const fs = require('fs');

const axios = require('axios');

class Busquedas {
    historial = ['Tegucigalpa','San Jose'];
    dbPath = './db/database.json';


    constructor() {

    }

    get paramsMapbox() {
        return {
            proximity:`ip`,
            language:`es`,
            access_token: process.env.MAPBOX_KEY,
            limit:5   
        }
    }

    get paramsWeather() {
        return {
            appid: process.env.OPENWEATHER_KEY,
            units: 'metric',
            lang: 'es'
        }
    }

    async ciudad(lugar = '') {
        try{
            
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params: this.paramsMapbox
            });

            const resp = await instance.get();

            // const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/madrid.json?proximity=ip&language=es&access_token=pk.eyJ1IjoibG9yZTMyIiwiYSI6ImNsYThkbzVwOTAyN2ozb3J5aW1tOXVwY3gifQ.eHzHgVhLPHQtZwoIXvA0tg&limit=5');

            //console.log(resp.data);
            return resp.data.features.map( lugar => ({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1],
            }));

        } catch (error) {         
            return [];
        }
    }

    async climaLugar(lat, lon) {

        try{

            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {...this.paramsWeather, lat, lon}
            });

            const resp = await instance.get();
            const { weather, main } = resp.data;
            
            return {
                desc: weather[0].description,
                min: main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    agregarHistorial( lugar = '' ) {

        //Evitar duplicados
        if( this.historial.includes(lugar.toLocaleLowerCase() )){
            return;
        }

        this.historial.unshift(lugar.toLocaleLowerCase());

        //Guardar en DB
        this.guardarEnDB();
    }

    guardarEnDB(){

        // const payload = {
        //     historial: this.historial
        // };

        //fs.writeFileSync( this.dbPath, JSON.this.stringify(payload) );
        fs.writeFileSync( this.dbPath, JSON.stringify(this.historial) );
    }

    leerBD(){

    }


}

module.exports = Busquedas;