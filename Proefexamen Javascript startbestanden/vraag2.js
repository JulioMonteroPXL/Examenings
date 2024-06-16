const products = [
    {
        food: "apple",
        calories: 50,
        characteristics: {color: "red", shape: "round"},
        brands: [
            {name: "Ceres Fruit Juices", employees: 500, revenue: 100000000, fair_trade: true, pricePerKG: 5},
            {name: "Fyffes", employees: 17000, revenue: 1500000000, fair_trade: false, pricePerKG: 4},
            {name: "Mars", employees: 125000, revenue: 35000000000, fair_trade: false, pricePerKG: 6},
            {name: "Fair-Trade-USA", employees: 50, revenue: 10000000, fair_trade: true, pricePerKG: 7},
            {name: "Equal-Exchange", employees: 130, revenue: 70, fair_trade: true, pricePerKG: 8}
        ],
        category: "fruits"
    },
    {
        food: "banana",
        calories: 89,
        characteristics: {color: "yellow", shape: "curved"},
        brands: [
            {name: "Chiquita", employees: 20000, revenue: 3000000000, fair_trade: false, pricePerKG: 6},
            {name: "Dole", employees: 75000, revenue: 7500000000, fair_trade: false, pricePerKG: 5},
            {name: "Equal Exchange", employees: 130, revenue: 70, fair_trade: true, pricePerKG: 7},
            {name: "Fair Trade USA", employees: 50, revenue: 10000000, fair_trade: true, pricePerKG: 8},
            {name: "Organic Bananas", employees: 10, revenue: 1000000, fair_trade: true, pricePerKG: 9}
        ],
        category: "fruits"
    },
    {
        food: "cherry",
        calories: 50,
        characteristics: {color: "red", shape: "round"},
        brands: [
            {name: "Ben & Jerry's", employees: 500, revenue: 50000000, fair_trade: true, pricePerKG: 7},
            {name: "Haagen-Dazs", employees: 10000, revenue: 1000000000, fair_trade: false, pricePerKG: 8},
            {name: "Nestle", employees: 273000, revenue: 90000000000, fair_trade: false, pricePerKG: 6},
            {name: "Fair Trade USA", employees: 50, revenue: 10000000, fair_trade: true, pricePerKG: 9},
            {name: "Equal Exchange", employees: 130, revenue: 70, fair_trade: true, pricePerKG: 5}
        ],
        category: "fruits"
    },
    {
        food: "carrot",
        calories: 41,
        characteristics: {color: "orange", shape: "long"},
        brands: [
            {name: "Bolthouse Farms", employees: 2000, revenue: 1000000000, fair_trade: false, pricePerKG: 3},
            {name: "Grimmway Farms", employees: 10000, revenue: 500000000, fair_trade: false, pricePerKG: 4},
            {name: "Cal-Organic Farms", employees: 500, revenue: 100000000, fair_trade: true, pricePerKG: 5},
            {name: "Earthbound Farm", employees: 1000, revenue: 200000000, fair_trade: false, pricePerKG: 6},
            {name: "Wholesum Harvest", employees: 100, revenue: 10000000, fair_trade: true, pricePerKG: 7}
        ],
        category: "vegetables"
    },
    {
        food: "cheese",
        calories: 402,
        characteristics: {color: "yellow", shape: "block"},
        brands: [
            {name: "Kraft", employees: 38000, revenue: 26000000000, fair_trade: false, pricePerKG: 8},
            {name: "Tillamook", employees: 900, revenue: 1000000000, fair_trade: false, pricePerKG: 7},
            {name: "Organic Valley", employees: 900, revenue: 100000000, fair_trade: true, pricePerKG: 9}
        ],
        category: "dairy"
    },
    {
        food: "yogurt",
        calories: 59,
        characteristics: {color: "white", shape: "liquid"},
        brands: [
            {name: "Chobani", employees: 2000, revenue: 1000000000, fair_trade: false, pricePerKG: 4},
            {name: "Fage", employees: 500, revenue: 500000000, fair_trade: false, pricePerKG: 5},
            {name: "Stonyfield Farm", employees: 1000, revenue: 100000000, fair_trade: true, pricePerKG: 6}
        ],
        category: "dairy"
    },
    {
        food: "milk",
        calories: 42,
        characteristics: {color: "white", shape: "liquid"},
        brands: [
            {name: "Horizon Organic", employees: 1000, revenue: 100000000, fair_trade: true, pricePerKG: 3},
            {name: "Organic Valley", employees: 900, revenue: 100000000, fair_trade: true, pricePerKG: 4},
            {name: "Fair Trade USA", employees: 50, revenue: 10000000, fair_trade: true, pricePerKG: 5}
        ],
        category: "dairy"
    },
    {
        food: "spinach",
        calories: 23,
        characteristics: {color: "green", shape: "leafy"},
        brands: [
            {name: "Dole", employees: 75000, revenue: 7500000000, fair_trade: false, pricePerKG: 2},
            {name: "Earthbound Farm", employees: 1000, revenue: 200000000, fair_trade: false, pricePerKG: 3},
            {name: "Wholesum Harvest", employees: 100, revenue: 10000000, fair_trade: true, pricePerKG: 4}
        ],
        category: "vegetables"
    }
];


// Oefening 1
function filterFoodsByFairTradeBrands(foods) {
    return foods
        .filter(product => product.brands.every(brand => brand.fair_trade))
        .map(product => ({
            food: product.food.charAt(0).toUpperCase() + product.food.slice(1),
            calories: product.calories,
            deelbaarDoorTwee: product.food.length % 2 === 0
        }))
        .filter(product => product.food[0] === product.food[0].toUpperCase());
}

console.log('Functie 1:', filterFoodsByFairTradeBrands(products));



// Oefening 2
//FIXME OPGELET!: De screenshot op het examenblad klopt niet! Enkel de eerste 3 items in de screenshot zouden in de array moeten zitten. De vierde (organic farms) niet.
function filterBrandsByNameWithStars(products) {
    return products
        .filter(product => product.calories === 50)
        .flatMap(product =>
            product.brands
                .filter(brand => brand.name.includes('-'))
                .map(brand => {
                    const nameWithStars = brand.name.replace(/-/g, '****');
                    return {
                        nameWithStars,
                        lastPart: () => nameWithStars.split('****').pop()
                    };
                })
        );

}
    console.log('Functie 2:', filterBrandsByNameWithStars(products));




// Oefening 3
function calculateEmployees(products) {
    return products.map(product => {
      const totalEmployees = product.brands.reduce((sum, brand) => sum + brand.employees, 0);
      if (totalEmployees > 20000) {
          return product.food.split('').reverse().join('');
      }else {
          const shortestBrandName = product.brands.reduce((shortest, brand) =>{
              return brand.name.length < shortest.length ? brand.name : shortest;
          },product.brands[0].name).toUpperCase();
              return shortestBrandName;
      }
    }).join(',')
}

console.log('Functie 3:', calculateEmployees(products));