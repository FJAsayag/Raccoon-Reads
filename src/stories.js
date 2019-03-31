const STORIES = {
  "BIOGRAFIAS": [{
    "num": "1",
    "name": "Frida Kahlo",
    "img": "https://d2svrcwl6l7hz1.cloudfront.net/content/B00UTTN5FE/resources/0?mime=image/*",
    "description":"Un libro que no le escapa a las batallas que tuvo que asumir Frida en toda su vida para llegar a ser una de las referentes más importantes del siglo XX: Arte y revolución, lucha de género, cultura originaria, enfermedad y capacidades diferentes son abordados por los autores con una sensibilidad especial. "
  }, {
    "num": "2",
    "name": "Marie Curie",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51XgfskrcEL._SX406_BO1,204,203,200_.jpg",
    "description":"Marie Curie fue la primera mujer doctora en Ciencias y profesora en la Universidad de París, además de la primera persona de la historia en recibir dos premios Nobel. Su sencillez y fe altruista en la ciencia la llevaron a descubrir el radio y el polonio y a desarrollar la teoría de la radioactividad por lo que está considerada la mujer más inspiradora de la ciencia moderna."
  },{
    "num": "3",
    "name": "Amelia Earhart",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51F4HZeO8sL._SX406_BO1,204,203,200_.jpg",
    "description":"Amelia Earhart fue una valiente e intrépida aviadora norteamericana. Su espíritu aventurero la llevó a convertirse en la primera mujer en cruzar el océano Atlántico en avioneta y la primera en hacerlo sola. Su misteriosa desaparición cuando estaba a punto de completar la vuelta al mundo por la línea del ecuador la convirtió en toda una leyenda de la historia de la aviación."
  },{
    "num": "4",
    "name": "Gloria Fuertes",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41wySeoSPLL._SX411_BO1,204,203,200_.jpg",
    "description":"Gloria Fuertes proviene de una familia humilde. Desde muy pequeña mostró interés por la literatura y a los catorce años publicó su primer libro de poesía. Gracias a su labor televisiva, se hizo muy popular y se convirtió en un referente para toda una generación de niños y niñas. A partir de entonces fue conocida como la «poeta de los niños»."
  },{
    "num": "5",
    "name": " Coco Chanel",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51ZUEN%2B9PsL._SX393_BO1,204,203,200_.jpg",
    "description":"Pequeña y grande Coco Chanel es un cuento con el que niñas y no tan niñas descubrirán quiénes eran y qué lograron las más grandes mujeres de la historia contemporánea. Diseñadoras, pintoras, aventureras, científicas... Mujeres únicas y maravillosas de las que aprender y con las que identificarse. Mujeres que, como Coco, convirtieron un pequeño sueño en una gran historia."
  },{
    "num": "6",
    "name": "Ella Fitzgerald",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51ohdtz7icL._SX407_BO1,204,203,200_.jpg",
    "description":"Ella Fitzgerald es una de las voces más influyentes del jazz y toda una leyenda de la historia de la música. Imprimió su genial y particular sello en canciones de todos los estilos: swing, bebop, blues, gospel, soul, bossanova y desarrolló como nadie el scat, un tipo de improvisación vocal con la que convertía su voz en un instrumento."
  },{
    "num": "7",
    "name": "Teresa de Calcuta",
    "img": "https://images-na.ssl-images-amazon.com/images/I/413GGWeki4L._SX406_BO1,204,203,200_.jpg",
    "description":"Teresa de Calcuta fue una monja católica de origen albanés fundadora de las Misioneras de la Caridad. Durante más de 45 años dedicó su vida a atender a pobres, enfermos, huérfanos y moribundos, primero en la India y más tarde, en el resto del mundo. Por su labor humanitaria obtuvo el Premio Nobel de la Paz y, tras su muerte, fue canonizada y proclamada santa."
  },{
    "num": "8",
    "name": "Georgia O’Keeffe",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41y27GEnDKL._SX405_BO1,204,203,200_.jpg",
    "description":"Georgia O’Keeffe fue una artista estadounidense de espíritu independiente que experimentó con las composiciones abstractas, se dejó influir por el arte indígena y desarrolló un estilo personal alejado del realismo. El legado de O’Keeffe influyó sobre toda una generación posterior de artistas por lo que está considerada como la madre del modernismo americano."
  }],
  "AVENTURAS": [{
    "num": "1",
    "name": "Frida Kahlo",
    "img": "https://d2svrcwl6l7hz1.cloudfront.net/content/B00UTTN5FE/resources/0?mime=image/*",
    "description":"Un libro que no le escapa a las batallas que tuvo que asumir Frida en toda su vida para llegar a ser una de las referentes más importantes del siglo XX: Arte y revolución, lucha de género, cultura originaria, enfermedad y capacidades diferentes son abordados por los autores con una sensibilidad especial. "
  }, {
    "num": "2",
    "name": "Marie Curie",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51XgfskrcEL._SX406_BO1,204,203,200_.jpg",
    "description":"Marie Curie fue la primera mujer doctora en Ciencias y profesora en la Universidad de París, además de la primera persona de la historia en recibir dos premios Nobel. Su sencillez y fe altruista en la ciencia la llevaron a descubrir el radio y el polonio y a desarrollar la teoría de la radioactividad por lo que está considerada la mujer más inspiradora de la ciencia moderna."
  },{
    "num": "3",
    "name": "Amelia Earhart",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51F4HZeO8sL._SX406_BO1,204,203,200_.jpg",
    "description":"Amelia Earhart fue una valiente e intrépida aviadora norteamericana. Su espíritu aventurero la llevó a convertirse en la primera mujer en cruzar el océano Atlántico en avioneta y la primera en hacerlo sola. Su misteriosa desaparición cuando estaba a punto de completar la vuelta al mundo por la línea del ecuador la convirtió en toda una leyenda de la historia de la aviación."
  },{
    "num": "4",
    "name": "Gloria Fuertes",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41wySeoSPLL._SX411_BO1,204,203,200_.jpg",
    "description":"Gloria Fuertes proviene de una familia humilde. Desde muy pequeña mostró interés por la literatura y a los catorce años publicó su primer libro de poesía. Gracias a su labor televisiva, se hizo muy popular y se convirtió en un referente para toda una generación de niños y niñas. A partir de entonces fue conocida como la «poeta de los niños»."
  },{
    "num": "5",
    "name": " Coco Chanel",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51ZUEN%2B9PsL._SX393_BO1,204,203,200_.jpg",
    "description":"Pequeña y grande Coco Chanel es un cuento con el que niñas y no tan niñas descubrirán quiénes eran y qué lograron las más grandes mujeres de la historia contemporánea. Diseñadoras, pintoras, aventureras, científicas... Mujeres únicas y maravillosas de las que aprender y con las que identificarse. Mujeres que, como Coco, convirtieron un pequeño sueño en una gran historia."
  },{
    "num": "6",
    "name": "Ella Fitzgerald",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51ohdtz7icL._SX407_BO1,204,203,200_.jpg",
    "description":"Ella Fitzgerald es una de las voces más influyentes del jazz y toda una leyenda de la historia de la música. Imprimió su genial y particular sello en canciones de todos los estilos: swing, bebop, blues, gospel, soul, bossanova y desarrolló como nadie el scat, un tipo de improvisación vocal con la que convertía su voz en un instrumento."
  },{
    "num": "7",
    "name": "Teresa de Calcuta",
    "img": "https://images-na.ssl-images-amazon.com/images/I/413GGWeki4L._SX406_BO1,204,203,200_.jpghttp://www.serebii.net/pokemongo/pokemon/001.png",
    "description":"Teresa de Calcuta fue una monja católica de origen albanés fundadora de las Misioneras de la Caridad. Durante más de 45 años dedicó su vida a atender a pobres, enfermos, huérfanos y moribundos, primero en la India y más tarde, en el resto del mundo. Por su labor humanitaria obtuvo el Premio Nobel de la Paz y, tras su muerte, fue canonizada y proclamada santa."
  },{
    "num": "8",
    "name": "Georgia O’Keeffe",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41y27GEnDKL._SX405_BO1,204,203,200_.jpg",
    "description":"Georgia O’Keeffe fue una artista estadounidense de espíritu independiente que experimentó con las composiciones abstractas, se dejó influir por el arte indígena y desarrolló un estilo personal alejado del realismo. El legado de O’Keeffe influyó sobre toda una generación posterior de artistas por lo que está considerada como la madre del modernismo americano."
  }],
  "FABULAS": [{
    "num": "1",
    "name": "Frida Kahlo",
    "img": "https://d2svrcwl6l7hz1.cloudfront.net/content/B00UTTN5FE/resources/0?mime=image/*",
    "description":"Un libro que no le escapa a las batallas que tuvo que asumir Frida en toda su vida para llegar a ser una de las referentes más importantes del siglo XX: Arte y revolución, lucha de género, cultura originaria, enfermedad y capacidades diferentes son abordados por los autores con una sensibilidad especial. "
  }, {
    "num": "2",
    "name": "Marie Curie",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51XgfskrcEL._SX406_BO1,204,203,200_.jpg",
    "description":"Marie Curie fue la primera mujer doctora en Ciencias y profesora en la Universidad de París, además de la primera persona de la historia en recibir dos premios Nobel. Su sencillez y fe altruista en la ciencia la llevaron a descubrir el radio y el polonio y a desarrollar la teoría de la radioactividad por lo que está considerada la mujer más inspiradora de la ciencia moderna."
  },{
    "num": "3",
    "name": "Amelia Earhart",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51F4HZeO8sL._SX406_BO1,204,203,200_.jpg",
    "description":"Amelia Earhart fue una valiente e intrépida aviadora norteamericana. Su espíritu aventurero la llevó a convertirse en la primera mujer en cruzar el océano Atlántico en avioneta y la primera en hacerlo sola. Su misteriosa desaparición cuando estaba a punto de completar la vuelta al mundo por la línea del ecuador la convirtió en toda una leyenda de la historia de la aviación."
  },{
    "num": "4",
    "name": "Gloria Fuertes",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41wySeoSPLL._SX411_BO1,204,203,200_.jpg",
    "description":"Gloria Fuertes proviene de una familia humilde. Desde muy pequeña mostró interés por la literatura y a los catorce años publicó su primer libro de poesía. Gracias a su labor televisiva, se hizo muy popular y se convirtió en un referente para toda una generación de niños y niñas. A partir de entonces fue conocida como la «poeta de los niños»."
  },{
    "num": "5",
    "name": " Coco Chanel",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51ZUEN%2B9PsL._SX393_BO1,204,203,200_.jpg",
    "description":"Pequeña y grande Coco Chanel es un cuento con el que niñas y no tan niñas descubrirán quiénes eran y qué lograron las más grandes mujeres de la historia contemporánea. Diseñadoras, pintoras, aventureras, científicas... Mujeres únicas y maravillosas de las que aprender y con las que identificarse. Mujeres que, como Coco, convirtieron un pequeño sueño en una gran historia."
  },{
    "num": "6",
    "name": "Ella Fitzgerald",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51ohdtz7icL._SX407_BO1,204,203,200_.jpg",
    "description":"Ella Fitzgerald es una de las voces más influyentes del jazz y toda una leyenda de la historia de la música. Imprimió su genial y particular sello en canciones de todos los estilos: swing, bebop, blues, gospel, soul, bossanova y desarrolló como nadie el scat, un tipo de improvisación vocal con la que convertía su voz en un instrumento."
  },{
    "num": "7",
    "name": "Teresa de Calcuta",
    "img": "https://images-na.ssl-images-amazon.com/images/I/413GGWeki4L._SX406_BO1,204,203,200_.jpghttp://www.serebii.net/pokemongo/pokemon/001.png",
    "description":"Teresa de Calcuta fue una monja católica de origen albanés fundadora de las Misioneras de la Caridad. Durante más de 45 años dedicó su vida a atender a pobres, enfermos, huérfanos y moribundos, primero en la India y más tarde, en el resto del mundo. Por su labor humanitaria obtuvo el Premio Nobel de la Paz y, tras su muerte, fue canonizada y proclamada santa."
  },{
    "num": "8",
    "name": "Georgia O’Keeffe",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41y27GEnDKL._SX405_BO1,204,203,200_.jpg",
    "description":"Georgia O’Keeffe fue una artista estadounidense de espíritu independiente que experimentó con las composiciones abstractas, se dejó influir por el arte indígena y desarrolló un estilo personal alejado del realismo. El legado de O’Keeffe influyó sobre toda una generación posterior de artistas por lo que está considerada como la madre del modernismo americano."
  }],
  "FANTASÍA": [{
    "num": "1",
    "name": "Frida Kahlo",
    "img": "https://d2svrcwl6l7hz1.cloudfront.net/content/B00UTTN5FE/resources/0?mime=image/*",
    "description":"Un libro que no le escapa a las batallas que tuvo que asumir Frida en toda su vida para llegar a ser una de las referentes más importantes del siglo XX: Arte y revolución, lucha de género, cultura originaria, enfermedad y capacidades diferentes son abordados por los autores con una sensibilidad especial. "
  }, {
    "num": "2",
    "name": "Marie Curie",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51XgfskrcEL._SX406_BO1,204,203,200_.jpg",
    "description":"Marie Curie fue la primera mujer doctora en Ciencias y profesora en la Universidad de París, además de la primera persona de la historia en recibir dos premios Nobel. Su sencillez y fe altruista en la ciencia la llevaron a descubrir el radio y el polonio y a desarrollar la teoría de la radioactividad por lo que está considerada la mujer más inspiradora de la ciencia moderna."
  },{
    "num": "3",
    "name": "Amelia Earhart",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51F4HZeO8sL._SX406_BO1,204,203,200_.jpg",
    "description":"Amelia Earhart fue una valiente e intrépida aviadora norteamericana. Su espíritu aventurero la llevó a convertirse en la primera mujer en cruzar el océano Atlántico en avioneta y la primera en hacerlo sola. Su misteriosa desaparición cuando estaba a punto de completar la vuelta al mundo por la línea del ecuador la convirtió en toda una leyenda de la historia de la aviación."
  },{
    "num": "4",
    "name": "Gloria Fuertes",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41wySeoSPLL._SX411_BO1,204,203,200_.jpg",
    "description":"Gloria Fuertes proviene de una familia humilde. Desde muy pequeña mostró interés por la literatura y a los catorce años publicó su primer libro de poesía. Gracias a su labor televisiva, se hizo muy popular y se convirtió en un referente para toda una generación de niños y niñas. A partir de entonces fue conocida como la «poeta de los niños»."
  },{
    "num": "5",
    "name": " Coco Chanel",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51ZUEN%2B9PsL._SX393_BO1,204,203,200_.jpg",
    "description":"Pequeña y grande Coco Chanel es un cuento con el que niñas y no tan niñas descubrirán quiénes eran y qué lograron las más grandes mujeres de la historia contemporánea. Diseñadoras, pintoras, aventureras, científicas... Mujeres únicas y maravillosas de las que aprender y con las que identificarse. Mujeres que, como Coco, convirtieron un pequeño sueño en una gran historia."
  },{
    "num": "6",
    "name": "Ella Fitzgerald",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51ohdtz7icL._SX407_BO1,204,203,200_.jpg",
    "description":"Ella Fitzgerald es una de las voces más influyentes del jazz y toda una leyenda de la historia de la música. Imprimió su genial y particular sello en canciones de todos los estilos: swing, bebop, blues, gospel, soul, bossanova y desarrolló como nadie el scat, un tipo de improvisación vocal con la que convertía su voz en un instrumento."
  },{
    "num": "7",
    "name": "Teresa de Calcuta",
    "img": "https://images-na.ssl-images-amazon.com/images/I/413GGWeki4L._SX406_BO1,204,203,200_.jpghttp://www.serebii.net/pokemongo/pokemon/001.png",
    "description":"Teresa de Calcuta fue una monja católica de origen albanés fundadora de las Misioneras de la Caridad. Durante más de 45 años dedicó su vida a atender a pobres, enfermos, huérfanos y moribundos, primero en la India y más tarde, en el resto del mundo. Por su labor humanitaria obtuvo el Premio Nobel de la Paz y, tras su muerte, fue canonizada y proclamada santa."
  },{
    "num": "8",
    "name": "Georgia O’Keeffe",
    "img": "https://images-na.ssl-images-amazon.com/images/I/41y27GEnDKL._SX405_BO1,204,203,200_.jpg",
    "description":"Georgia O’Keeffe fue una artista estadounidense de espíritu independiente que experimentó con las composiciones abstractas, se dejó influir por el arte indígena y desarrolló un estilo personal alejado del realismo. El legado de O’Keeffe influyó sobre toda una generación posterior de artistas por lo que está considerada como la madre del modernismo americano."
  }]
};
