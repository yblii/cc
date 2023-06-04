// array with characteristics of each plant
const plants = [
    {
        name: "Basil",
        sciName: "Ocimum basilicum",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                    "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                    "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                    "Seattle", "Shoreline", "Shoreline"],
        systems: ["wick system hydroponics", "kratky hydroponics", "ebb and flow hydroponics", 
                    "low-pressure aeroponics"],
        maintenance: 1,
        type: "herb",
        growing_time: "2 weeks",
        difficulty: "1",
        image: "https://i0.wp.com/images-prod.healthline.com/hlcmsresource/images/topic_centers/Food-Nutrition/1296x728_Holy_Basil.jpg?w=1155&h=1528"
    },
    {
        name: "Fava Beans",
        sciName: "Vicia faba",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                    "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                    "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                    "Seattle", "Shoreline", "Shoreline"],
        systems: ["kratky hydroponics", "low-pressure aeroponicsponics", "ebb and flow hydroponics"],
        maintenance: 3,
        type: "vegetable",
        growing_time: "11-14 weeks",
        difficulty: "1",
        image: "https://www.allrecipes.com/thmb/tir_0r8jcDhYS0UF_neNLB_0k2s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/BM_6203-S-fava-beans-photo-by-meredith-cropped-86efa69124754b3582e785cd9e21fe0c.jpg"
    },
    {
        name: "Lima Beans",
        sciName: "Phaseolus lunatus",
        cities: ["Bellingham", "Olympia", "Puyallup", "Sammamish", "Seattle", "Shoreline", "Tacoma"],
        systems: ["kratky hydroponics", "low-pressure aeroponicsponics", "ebb and flow hydroponics"],
        maintenance: 3,
        type: "vegetable",
        growing_time: "8 weeks",
        difficulty: "1",
        image: "https://www.thespruce.com/thmb/N6iE-VdIrri2Kd_JisLTOdGCLW8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Lima-Beans-GettyImages-92385531-59c14d28af5d3a0010abf682.jpg"
    },
    {
        name: "Bell Peppers",
        sciName: "Capsicum annuum",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                    "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                    "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                    "Seattle", "Shoreline", "Shoreline"],
        systems: ["kratky hydroponics", "deep water culture hydroponics"],
        maintenance: 2,
        type: "vegetable",
        growing_time: "7-11 weeks",
        difficulty: "4",
        image: "https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/bell_peppers_dleonis_gettyimages.jpg?itok=CQCGWkcY"
    },
    {
        name: "Bluberries",
        sciName: "Vaccinium Cyanococcus",
        cities: ["Bellingham", "Olympia", "Puyallup", "Sammamish", "Seattle", "Shoreline", "Tacoma"],
        systems: ["kratky hydroponics", "ebb and flow hydroponics"],
        maintenance: 1,
        type: "fruit",
        growing_time: "20 weeks",
        difficulty: "4",
        image: "https://www.thespruce.com/thmb/upyubd0CJm2pl5GW_986r02Ca64=/5750x0/filters:no_upscale():max_bytes(150000):strip_icc()/blueberries-vaccinium-spp-3269245-01-42fb9fde200d4c05a2a5d3c6e94a0bf2.jpg"
    },
    {
        name: "Broccoli",
        sciName: "Brassica oleracea var. italica",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                    "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                    "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                    "Seattle", "Shoreline", "Shoreline"],
        systems: ["kratky hydroponics", "deep water culture hydroponics", "ebb and flow hydroponics"],
        maintenance: 1,
        type: "vegetable",
        growing_time: "11 weeks",
        difficulty: "2",
        image: "https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/broccoli-plant.jpg?itok=xXvyh_Hr"
    },
    {
        name: "Cabbage",
        sciName: "Brassica oleracea var. capitata",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                    "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                    "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                    "Seattle", "Shoreline", "Shoreline"],
        systems: ["kratky hydroponics", "deep water culture hydroponics"],
        maintenance: 1,
        type: "vegetable",
        growing_time: "9-14 weeks",
        difficulty: "2",
        image: "https://www.thedailymeal.com/img/gallery/how-does-red-cabbage-taste-compared-to-green-cabbage/l-intro-1670973498.jpg"
    },
    {
        name: "Cantaloupe",
        sciName: "Cucumis melo var. cantalupensis",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                    "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                    "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                    "Seattle", "Shoreline", "Shoreline"],
        systems: ["ebb and flow hydroponics", "drip system hydroponics"],
        maintenance: 3,
        type: "fruit",
        growing_time: "11-13 weeks",
        difficulty: "5",
        image: "https://www.thespruce.com/thmb/lS8hu0ZTJXi1ZNQUOAVT0vKhDAg=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc()/growing-cantaloupe-plants-5087082-hero-1cf5450f84e24789816699548a6a7b52.jpg"
    },
    {
        name: "Celery",
        sciName: "Apium graveolens",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                    "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                    "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                    "Seattle", "Shoreline", "Shoreline"],
        systems: ["kratky hydroponics", "ebb and flow hydroponics"],
        maintenance: 2,
        type: "vegetable",
        growing_time: "20 weeks",
        difficulty: "2",
        image: "https://growinginthegarden.com/wp-content/uploads/2022/03/How-to-grow-celery.png"
    },
    {
        name: "Chard",
        sciName: "Beta vulgaris subsp. vulgaris",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                    "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                    "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                    "Seattle", "Shoreline", "Shoreline"],
        systems: ["kratky hydroponics", "deep water culture hydroponics", "ebb and flow hydroponics"],
        maintenance: 1,
        type: "vegetable",
        growing_time: "4-5 weeks",
        difficulty: "2",
        image: "https://joegardener.com/wp-content/uploads/2019/09/ch9.14A-Project-708x466.jpg"
    },
    {
        name: "Chives",
        sciName: "Allium schoenoprasum",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                    "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                    "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                    "Seattle", "Shoreline", "Shoreline"],
        systems: ["wick system hydroponics", "kratky hydroponics", "ebb and flow hydroponics", "low-pressure aeroponicsponics"],
        maintenance: 1,
        type: "herb",
        growing_time: "2-3 weeks",
        difficulty: "1",
        image: "https://images.ctfassets.net/pujs1b1v0165/1RKv0Ah1PD0CNF9qlV2HVA/480cd3d1f31e258b95e083fe83dad4c4/how_to_grow_chives.jpg?w=1200&h=630&fit=fill"
    },
    {
        name: "Cilantro",
        sciName: "Coriandrum sativum",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                    "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                    "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                    "Seattle", "Shoreline", "Shoreline"],
        systems: ["wick system hydroponics", "kratky hydroponics", "ebb and flow hydroponics", "low-pressure aeroponicsponics"],
        maintenance: 1,
        type: "vegetable",
        growing_time: "7-8 weeks",
        difficulty: "1",
        image: "https://images.squarespace-cdn.com/content/v1/5a8c3a5ecf81e0c5cec85c7b/1585620764291-Y19KQGJE5U1WHHOJ5QYR/Grow-the-Best-Cilantro-at-Home-with-These-Tips.jpg?format=2500w"
    },
    {
        name: "Cucumbers",
        sciName: "Cucumis sativus",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                    "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                    "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                    "Seattle", "Shoreline", "Shoreline"],
        systems: ["kratky hydroponics", "ebb and flow hydroponics", "drip system hydroponics"],
        maintenance: 2,
        type: "vegetable",
        growing_time: "7-10 weeks",
        difficulty: "2",
        image: "https://oldworldgardenfarms.com/wp-content/uploads/2021/06/how-to-grow-cucumber-plants.jpg"
    },
    {
        name: "Dill",
        sciName: "Anethum graveolens",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                    "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                    "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                    "Seattle", "Shoreline", "Shoreline"],
        systems: ["wick system hydroponics", "kratky hydroponics", "ebb and flow hydroponics", "low-pressure aeroponicsponics"],
        maintenance: 3,
        type: "herb",
        growing_time: "9 weeks",
        difficulty: "1",
        image: "https://www.allaboutgardening.com/wp-content/uploads/2021/11/Row-of-Herbs-in-a-Garden.jpg"
    },
    {
        name: "Kale",
        sciName: "Brassica oleracea var. sabellica",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                    "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                    "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                    "Seattle", "Shoreline", "Shoreline"],
        systems: ["wick system hydroponics", "kratky hydroponics", "deep water culture hydroponics", "ebb and flow hydroponics", "low-pressure aeroponicsponics", "drip system hydroponics"],
        maintenance: 2,
        type: "vegetable",
        growing_time: "13-17 weeks",
        difficulty: "1",
        image: "https://gardenerspath.com/wp-content/uploads/2019/10/How-to-Harvest-Homegrown-Kale.jpg"
    },
    {
        name: "Lettuce",
        sciName: "Lactuca sativa",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                    "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                    "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                    "Seattle", "Shoreline", "Shoreline"],
        systems: ["wick system hydroponics", "kratky hydroponics", "deep water culture hydroponics", "ebb and flow hydroponics", "low-pressure aeroponicsponics", "drip system hydroponics"],
        maintenance: 1,
        type: "vegetable",
        growing_time: "6-7 weeks",
        difficulty: "1",
        image: "https://www.homestratosphere.com/wp-content/uploads/2022/06/lettuce-plants-in-garden-06162022-min.jpg.webp"
    },
    {
        name: "Mint",
        sciName: "Mentha",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                    "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                    "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                    "Seattle", "Shoreline", "Shoreline"],
        systems: ["wick system hydroponics", "kratky hydroponics", "ebb and flow hydroponics"],
        maintenance: 1,
        type: "herb",
        growing_time: "3-4 weeks",
        difficulty: "1",
        image: "https://www.thespruce.com/thmb/9vQjhc5QTXqvV89JSLl0wW2N4h4=/3206x0/filters:no_upscale():max_bytes(150000):strip_icc()/growing-mint-1402628-closeup-d55f829e9b4d487d942a2edec4343eab.jpg"
    },
    {
        name: "Oregano",
        sciName: "Origanum vulgare",
        cities: ["Bellingham", "Olympia", "Puyallup", "Sammamish", "Seattle", "Shoreline", "Tacoma"],
        systems: ["wick system hydroponics", "kratky hydroponics", "ebb and flow hydroponics", "low-pressure aeroponicsponics"],
        maintenance: 4,
        type: "herb",
        growing_time: "8 weeks",
        difficulty: "1",
        image: "https://www.thespruce.com/thmb/b7N4dfqrsZ-be1QpCkVQNIwrS3s=/3300x0/filters:no_upscale():max_bytes(150000):strip_icc()/herb-profile-oregano-1761786-5-5c01c4fc1b4d4d748680c261c760497e.jpg"
    },
    {
        name: "Parsley",
        sciName: "Petroselinum crispum",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                            "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                            "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                            "Seattle", "Shoreline", "Shoreline"],
        systems: ["wick system hydroponics", "kratky hydroponics", "ebb and flow hydroponics", "low-pressure aeroponicsponics"],
        maintenance: 2,
        type: "herb",
        growing_time: "3-5 weeks",
        difficulty: "3",
        image: "https://www.gardenzeus.com/wp-content/uploads/shutterstock_314859527-scaled.jpg"
    },
    {
        name: "Chili Pepper",
        sciName: "Capsiceae",
        cities: ["Bellingham", "Olympia", "Puyallup", "Sammamish", "Seattle", "Shoreline", "Tacoma"],
        systems: ["kratky hydroponics", "deep water culture hydroponics", "ebb and flow hydroponics"],
        maintenance: 3,
        type: "vegetable",
        growing_time: "13-17 weeks",
        difficulty: "2",
        image: "https://cdn.britannica.com/62/118162-050-56CC9480/cultivar-Thai-chili-peppers-fruits.jpg"
    },
    {
        name: "Radish",
        sciName: "Raphanus sativus",
        cities: ["Bellingham", "Olympia", "Puyallup", "Sammamish", "Seattle", "Shoreline", "Tacoma"],
        systems: ["kratky hydroponics", "deep water culture hydroponics", "drip system hydroponics"],
        maintenance: 4,
        type: "vegetable",
        growing_time: "3-5 weeks",
        difficulty: "1",
        image: "https://www.gardeningchores.com/wp-content/uploads/2021/07/How-To-Grow-Radishes-In-Your-Garden-From-Seeds-To-Harvest.jpg"
    },
    {
        name: "Rosemary",
        sciName: "Salvia rosmarinus",
        cities: ["Bellingham", "Olympia", "Puyallup", "Sammamish", "Seattle", "Shoreline", "Tacoma"],
        systems: ["wick system hydroponics", "kratky hydroponics", "ebb and flow hydroponics", "low-pressure aeroponicsponics"],
        maintenance: 2,
        type: "herb",
        growing_time: "10-12 weeks",
        difficulty: "2",
        image: "https://www.allaboutgardening.com/wp-content/uploads/2023/02/Rosemary-in-containers-ready-for-garden-planting-1200x667.jpg"
    },
    {
        name: "Sage",
        sciName: "Salvia officinalis",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                            "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                            "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                            "Seattle", "Shoreline", "Shoreline"],
        systems: ["wick system hydroponics", "kratky hydroponics", "ebb and flow hydroponics", "low-pressure aeroponicsponics"],
        maintenance: 3,
        type: "herb",
        growing_time: "11 weeks",
        difficulty: "1",
        image: "https://www.thespruce.com/thmb/slWwoGZC5hz5pYF2pRn3Li_NnIY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/growing-sage-1402599-12-275432c21c2b46a0b3d639dda404011e.jpg"
    },
    {
        name: "Spinach",
        sciName: "Spinacia oleracea",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                            "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                            "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                            "Seattle", "Shoreline", "Shoreline"],
        systems: ["wick system hydroponics", "kratky hydroponics", "deep water culture hydroponics", "ebb and flow hydroponics", "low-pressure aeroponicsponics", "drip system hydroponics"],
        maintenance: 2,
        type: "vegetable",
        growing_time: "6-7 weeks",
        difficulty: "3",
        image: "https://hips.hearstapps.com/hmg-prod/images/981/articles/2018/02/growingspinach-1000-0-1519138802.jpg"
    },
    {
        name: "Strawberry",
        sciName: "Fragaria × ananassa",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                            "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                            "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                            "Seattle", "Shoreline", "Shoreline"],
        systems: ["kratky hydroponics", "ebb and flow hydroponics", "low-pressure aeroponicsponics", "drip system hydroponics"],
        maintenance: 4,
        type: "fruit",
        growing_time: "8-12 weeks",
        difficulty: "1",
        image: "https://cdn.shopify.com/s/files/1/0515/1617/8599/products/nature-strawberries-plants-crops-summer-fruits_6e2e8984-567a-432c-8380-6e2a93d6cff8_800x.jpg?v=1630427094"
    },
    {
        name: "Thyme",
        sciName: "Thymus vulgaris",
        cities: ["Bellingham", "Olympia", "Puyallup", "Sammamish", "Seattle", "Shoreline", "Tacoma"],
        systems: ["wick system hydroponics", "kratky hydroponics", "ebb and flow hydroponics", "low-pressure aeroponicsponics"],
        maintenance: 3,
        type: "herb",
        growing_time: "4-6 weeks",
        difficulty: "2",
        image: "https://gardenerspath.com/wp-content/uploads/2021/03/Learn-How-to-Plant-and-Grow-Common-Thyme-Thymus-vulgaris-FB.jpg"
    },
    {
        name: "Tomato",
        sciName: "Solanum lycopersicum",
        cities: ["Auburn", "Bainbridge Island", "Bellevue", "Bellingham", "Bothell", 
                            "Bremerton", "Edmonds", "Everett", "Gig Harbor", "Kent", "Kirkland", 
                            "Mercer Island", "Olympia", "Puyallup", "Redmond", "Renton", "Sammamish", 
                            "Seattle", "Shoreline", "Shoreline"],
        systems: ["kratky hydroponics", "deep water culture hydroponics", "ebb and flow hydroponics", "drip system hydroponics"],
        maintenance: 4,
        type: "fruit",
        growing_time: "8-13 weeks",
        difficulty: "4",
        image: "https://www.thespruce.com/thmb/Y-hs5FxVMUt13P5BlGznUBJjUzk=/5750x0/filters:no_upscale():max_bytes(150000):strip_icc()/top-tomato-growing-tips-1402587-11-c6d6161716fd448fbca41715bbffb1d9.jpg"
    },
    {
        name: "Watercress",
        sciName: "Nasturtium officinale",
        cities: ["Bellingham", "Olympia", "Puyallup", "Sammamish", "Seattle", "Shoreline", "Tacoma"],
        systems: ["kratky hydroponics", "deep water culture hydroponics"],
        maintenance: 2,
        type: "vegetable",
        growing_time: "4-9 weeks",
        difficulty: "2",
        image: "https://cdn.mos.cms.futurecdn.net/kFHir5f32wB43FgyT7mtgj.jpg"
    }
]

function displayProducts(plants, container) {
    if (plants.length > 0) {
        const plant_details = plants.map(
            (plant) => 
                `<div id="plants">
                    <button class="collapsible" style="width: 1400px; font-size: 20px; font-family: 'Crimson Text', serif;"> ${plant.name} </button>
                        <div class="content">
                           
                            <table class="collapsibleTable" style: "width: 1200px;">
                                <tr>
                                    <td>
                                    <div class="image" style="float:right;">
                                        <img src= ${plant.image} style="width: 500px; height: auto; float: right;"/> </td> </dov>
                                    <td>
                                        <table> 
                                            <tr>
                                            <br>
                                            
                                            <h2 style="font-size: 30px; font-family: 'Crimson Text', serif;"> &nbsp ${plant.sciName} <br />&nbsp Category: ${plant.type} <br />&nbsp Maintenance: ${plant.maintenance} <br />&nbsp Grow Time: ${plant.growing_time} <br />&nbsp Difficulty: ${plant.difficulty}</h2></tr>
                                            <br>
                                         </table>
                                    </td>
                                </tr> 
                            </table>
                        </div>
                        <br>
                        </div>
                `
            )
            .join("");
            container.innerHTML = plant_details;
      } else {
            container.innerHTML = "<h3>No Plants Available</h3>";
      }
}

function setCategories(city, system, container) {
    displayProducts(plants.filter((plant) => (plant.cities.includes(city)) && plant.systems.includes(system)), container);
}