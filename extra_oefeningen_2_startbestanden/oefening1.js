document.addEventListener('DOMContentLoaded', function () {

    const styles = `
    .vehicle-card{
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;
    width: 300px;
    display: inline-block;
    vertical-align: top;
    text-align: center;
    }
    .vehicle-card img{
    width: 100%;
    height: auto;
    }
    .darkorange {
    color: darkorange;
    }
    `;
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    const vehicles = [
        {
            model: 'Mercedes AMG',
            license: 'B',
            odometer: 0,
            price: 240000,
            imgPath: 'mercedes-amg.jpg'
        },
        {
            model: 'Kawasaki Ninja 400',
            license: 'A',
            odometer: 11500,
            price: 5500,
            imgPath: 'kawasaki-ninja.jpg'
        },
        {
            model: 'Ford Mondeo',
            license: 'B',
            odometer: 14000,
            price: 30000,
            imgPath: 'ford-mondeo.jpeg'
        },

        {
            model: 'Ducati Panigale Superbike',
            license: 'A',
            odometer: 2499,
            price: 21999,
            imgPath: 'ducati-panigale.jpg'
        },
        {
            model: 'Ford Fiesta ST',
            license: 'B',
            odometer: 45124,
            price: 19999,
            imgPath: 'ford-fiesta-st.jpg'
        },
        {
            model: 'Ducati Panigale Superbike 2',
            license: 'A',
            odometer: 1000,
            price: 21999,
            imgPath: 'ducati-panigale.jpg'
        },
    ];

    const app = document.createElement("div");
    document.body.appendChild(app);

    const select = document.createElement("select");
    const options = ["alle" , 'A', 'B'];
    options.forEach(option => {
        const opt = document.createElement('option');
        opt.value = option;
        opt.textContent = option;
        select.appendChild(opt);
    });

    app.appendChild(select);
    const vehiclesContainer = document.createElement("div");
    app.appendChild(vehiclesContainer);

    // Tel het aantal veranderingen van de select-waarde
    let changeCount = 0;

    // Event listener toevoegen
    select.addEventListener("change", function() {
        changeCount++;
        filterVehicles(select.value);
    });
    function filterVehicles(filter) {
        // Clear de huidige lijst
        vehiclesContainer.innerHTML = "";

        let filteredVehicles;

        if (changeCount >= 3) {
            filteredVehicles = vehicles.slice().sort((a, b) => {
              const ascore = (a.model.length + a.odometer) % 3;
              const bscore = (b.model.length + a.odometer) % 3;
              return ascore - bscore;
            });
            changeCount = 0;
        } else {
            switch (filter) {
                case "A":
                    filteredVehicles = vehicles.filter(vehicle => vehicle.license === "A").sort((a, b) => {
                        if (a.price === b.price) {
                            return a.odometer - b.odometer;
                        }
                        return a.price - b.price;
                    });
                    break;
                case "B":
                    filteredVehicles = vehicles.filter(vehicle => vehicle.license === "B").sort((a, b) => b.model.localeCompare(a.model));
                    break;
                default:
                    filteredVehicles = vehicles;
            }
        }
        // Toon de gefilterde voertuigen

        filteredVehicles.forEach(vehicle => {
            const vehicleCard = document.createElement("div");
            vehicleCard.className = "vehicle-card";

            const vehicleImg = document.createElement("img");
            vehicleImg.src = `assets/${vehicle.imgPath}`;
            vehicleImg.alt= vehicle.model;

            const vehicleName = document.createElement('h3')
            vehicleName.textContent = vehicle.model;

            const vehiclePrice = document.createElement("p");
            vehiclePrice.textContent = `Prijs: ${vehicle.price} EUR`;
            if (vehicle.price > 20000){
                vehiclePrice.className = "darkorange";
            }

            const vehicleOdometer = document.createElement("p");
            vehicleOdometer.textContent = `KilometerStand: ${vehicle.odometer}`;

            vehicleCard.appendChild(vehicleImg);
            vehicleCard.appendChild(vehicleName);
            vehicleCard.appendChild(vehiclePrice);
            vehicleCard.appendChild(vehicleOdometer)

            vehiclesContainer.appendChild(vehicleCard);

        });
    }

    filterVehicles("alle")



})
