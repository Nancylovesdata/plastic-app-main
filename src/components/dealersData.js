const dealers = [
    {   "id":1,
        "name": "GreenPlast Recycling Ltd",
        "location": "Accra",
        "region": "Greater Accra Region",
        "capital": "Accra",
        "category": "Plastic Bottles",
        "image": "https://img.freepik.com/free-photo/recycle-background-with-recycle-sign-rubbish_23-2147825489.jpg?t=st=1714215584~exp=1714219184~hmac=d90fc1a9266075d295a1ec07e3da7c26be415e609db14ad4d06f277acfb929a3&w=740"
      },

      {   "id":2,
      "name": "Israel Arthur",
      "location": "Accra",
      "region": "Greater Accra Region",
      "capital": "Accra",
      "category": "Plastic Bottles",
      "image":'https://img.freepik.com/free-photo/sustainable-development-goals-still-life_23-2150196655.jpg?t=st=1714214958~exp=1714218558~hmac=cbd3ac9f43789db6baacf8d8943d584e45d2cdcbff62c142a49e6ab55f93162a&w=826'
    },

    {   "id":3,
    "name": "Nanette Fosu",
    "location": "Accra",
    "region": "Greater Accra Region",
    "capital": "Accra",
    "category": "Polythene Bag",
    "image": 'https://img.freepik.com/free-vector/specialist-plant-recycling-plastic-into-raw-material-waste-bin-mechanical-recycling-back-plastics-recycling-waste-material-reuse-concept_335657-620.jpg?t=st=1714214686~exp=1714218286~hmac=d3dc416b840373892dc4abe5f93077e0047bb8640557cfe422dc77fa755257f1&w=826'
  },

  {   "id":4,
  "name": "Hislord Benson",
  "location": "Accra",
  "region": "Greater Accra Region",
  "capital": "Accra",
  "category": "Polythene Bag",
  "image": 'https://img.freepik.com/free-photo/used-plastic-bottless-recycling-bins-earth-day-campaign_53876-104848.jpg?t=st=1714214705~exp=1714218305~hmac=4db65e2f6adece7789ccc08171d2f540da7c0494c68cfa8bc8e4825930865d28&w=826'
},


{   "id":5,
"name": "EcoPlast Recycling Ltd",
"location": "Accra",
"region": "Greater Accra Region",
"capital": "Accra",
"category": "Sachet Water Waste",
"image": 'https://img.freepik.com/free-photo/recycle-logo-various-recyclable-garbage-wooden-desk_23-2148115619.jpg?t=st=1714215244~exp=1714218844~hmac=9391de8fde5138a837bda1638ea183712530268a92b47a5e6794a0275e1922a6&w=826'
},


{   "id":6,
"name": "DanasePlast Recycling Ltd",
"location": "Tema",
"region": "Greater Accra Region",
"capital": "Accra",
"category": "Sachet Water Waste",
"image": 'https://images.yen.com.gh/images/64ba9f04bf4ec82c.jpg?imwidth=900'
},


{   "id":7,
"name": "Rose Appiah",
"location": "Tema",
"region": "Greater Accra Region",
"capital": "Accra",
"category": "Plastic Bottles",
"image": 'https://img.freepik.com/free-photo/young-woman-recycling-better-environment_23-2148999417.jpg?t=st=1714215953~exp=1714219553~hmac=453fd395b93a4f9bbfc2ff2bf1bcf7d6f630ac73d0db28788483ae62a886310c&w=360'
},


 {   "id":8,
        "name": "John Dumoga",
        "location": "Tema",
        "region": "Greater Accra Region",
        "capital": "Accra",
        "category": "Plastic Bottles",
        "image": 'https://img.freepik.com/free-photo/smiling-delighted-black-young-man-raises-two-fore-fingers-upwards-has-glad-facial-expression-shows-free-space-head_273609-23576.jpg?t=st=1714216204~exp=1714219804~hmac=787f342042f6d115be78d3812aa431157792de3ddc8a0b9f7d38f9d0024e7199&w=740'
      },


      {   "id":9,
      "name": "Fafa Agbeli",
      "location": "Tema",
      "region": "Greater Accra Region",
      "capital": "Accra",
      "category": "Sachet Water Waste",
      "image": 'https://www.tori.ng/userfiles/image/2021/mar/24/adejoke1.jpg'
    },


    {   "id":10,
    "name": "Kwesi Agyemang",
    "location": "Tema",
    "region": "Greater Accra Region",
    "capital": "Accra",
    "category": "Polythene Bag",
    "image": 'https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg?t=st=1714216330~exp=1714219930~hmac=0005b274a3c18be355853efdaf69b31a115ee6aca71a03d437f79be4d6dce253&w=826'
  },


  {   "id":11,
  "name": "Coliba Recycling Ltd",
  "location": "Dodowa",
  "region": "Greater Accra Region",
  "capital": "Accra",
  "category": "Sachet Water Waste",
  "image": 'https://img.freepik.com/free-photo/various-reusable-trash-around-recycling-symbol_23-2148115693.jpg?t=st=1714216424~exp=1714220024~hmac=cdcd8ed128441595ad25a6affff7ed8a815852520edfc00e038daea2257ed659&w=826'
},

{   "id":12,
"name": "Ama Ntow",
"location": "Dodowa",
"region": "Greater Accra Region",
"capital": "Accra",
"category": "Plastic Bottles",
"image": 'https://www.theelephant.info/wp-content/uploads/2022/11/Dumped-People-1.jpg'
},



      {
        "id":13,
        "name": "Juliuslovesplastics",
        "location": "Dodowa",
        "region": "Greater Accra Region",
        "capital": "Accra",
        "category": "Polythene Bag",
        "image": 'https://img.freepik.com/free-photo/man-with-arms-crossed_23-2148666516.jpg?t=st=1714216726~exp=1714220326~hmac=54ef33fe4db626001b081ce63b7e5dc4bea8a88822e04063ac25a524c49fad4d&w=740'
      },

      {
        "id":14,
        "name": "Sena Dzifa Doe",
        "location": "Dodowa",
        "region": "Greater Accra Region",
        "capital": "Accra",
        "category": "Sachet Water Waste",
        "image": 'https://www.undp.org/sites/g/files/zskgke326/files/migration/gh/UNDP_GH_Plastics_2021_Waste-Collector.jpg'
      },

      {
        "id":15,
        "name": "EcoCycle Solutions",
        "location": "Dodowa",
        "region": "Greater Accra Region",
        "capital": "Accra",
        "category": "Sachet Water Waste",
        "image": 'https://img.freepik.com/free-photo/green-recycle-symbol-surrounded-with-waste-items_23-2147817217.jpg?t=st=1714216945~exp=1714220545~hmac=e074006fce3e61a77345ff0ac3573fa531bce9e193864bc4d022d7ca4a6399da&w=826'
      },

      {
        "id":16,
        "name": "EcoTech Recycling Company",
        "location": "Dansoman",
        "region": "Greater Accra Region",
        "capital": "Accra",
        "category": "Sachet Water Waste",
        "image": 'https://img.freepik.com/free-photo/front-view-smiley-man-pressing-button_23-2149943826.jpg?t=st=1714217234~exp=1714220834~hmac=ea489f2b33c4ae63b358c00baf00bc7d8ab47019fe5d640f578ed2b6453f03d6&w=826'
      },

      {
        "id":17,
        "name": "Plast Industries",
        "location": "Dansoman",
        "region": "Greater Accra Region",
        "capital": "Accra",
        "category": "Polythene Bag",
        "image": 'https://img.freepik.com/free-photo/african-american-man-pointing-something_23-2149072176.jpg?t=st=1714217299~exp=1714220899~hmac=752c8877fcea3d537b2e2ee7294b779bfbdb8ddb54ec57edc0870b7af218fc4c&w=826'
      },



      {
        "id":18,
        "name": "Samson Nyamekye",
        "location": "Dansoman",
        "region": "Greater Accra Region",
        "capital": "Accra",
        "category": "Polythene Bag",
        "image": 'https://img.freepik.com/free-photo/portrait-smiley-man-with-ok-sign_23-2148666500.jpg?t=st=1714217399~exp=1714220999~hmac=a18b0dfad967fb2d740e88703dcb445b997b00743a6223e2e4b8bf83e55c2eb3&w=996'
      },


      {
        "id":19,
        "name": "Vivian Gyan",
        "location": "Dansoman",
        "region": "Greater Accra Region",
        "capital": "Accra",
        "category": "Plastic Bottles",
        "image": 'https://img.freepik.com/free-photo/recycling-concept-top-view_23-2148834502.jpg?t=st=1714217477~exp=1714221077~hmac=80d5a863c13914e671ebe82fa01b4935abf0f409a38e219ea4134a956a7f018a&w=826'
      },


      {
        "id":20,
        "name": "PlastRevive Solutions",
        "location": "Dansoman",
        "region": "Greater Accra Region",
        "capital": "Accra",
        "category": "Plastic Bottles",
        "image": 'https://img.freepik.com/free-photo/portrait-young-woman-smiling-isolated_23-2149158566.jpg?t=st=1714217579~exp=1714221179~hmac=37ce1008c5075621576f1756ea9e17dab1f2b4a21c95557a6c3308db3b8c052b&w=360'
      },

]
export default dealers;