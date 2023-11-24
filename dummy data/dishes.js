

class Dish {
  constructor(name, description, price, image,id) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.image = image;
    this.id = id;
  }
}

const paneer_butter_masala = new Dish(
  "Paneer Butter Masala",
  "Paneer Butter Masala is a rich and creamy North Indian dish that tantalizes the taste buds with its flavorful blend of paneer (Indian cottage cheese) cubes immersed in a velvety tomato-based curry. Slow-cooked with a medley of aromatic spices, butter, and cream, this indulgent vegetarian curry offers a perfect balance of tangy and mildly sweet flavors. Served hot with naan or rice, Paneer Butter Masala is a culinary delight that brings comfort and satisfaction to every bite, making it a beloved choice for those seeking a delicious and heartwarming meal.",
  200,
  require("../assets/images/dish/Paneer-butter-masala-recipe-3-500x500.jpg"),
  1
);
const paneer_khurchan = new Dish(
  "Paneer Khurchan",
  `Paneer Khurchan is a delectable North Indian dish that showcases the irresistible combination of succulent paneer (Indian cottage cheese) strips cooked to perfection with an array of aromatic spices. The dish derives its name from the cooking technique, where the paneer is finely shredded or "khurchan-ed" to absorb the rich flavors of the spices. Sautéed with bell peppers, onions, and a medley of masalas, Paneer Khurchan boasts a delightful mix of textures and tastes, ranging from smoky and spicy to mildly sweet. This dish, served hot and garnished with fresh coriander, is a true gastronomic delight for those seeking a flavorful and satisfying culinary experience.`,
  300,
  require("../assets/images/dish/Paneer-Khurchan-Recipe-6-e1586430334675.jpg"),
  2
);
const chur_chur_naan = new Dish(
  "Chur Chur Naan",
  `Chur Chur Naan is an Indian bread delicacy that stands out for its unique preparation method, delivering a delightful crunch and softness in every bite. The term "Chur Chur" translates to "crunchy" in Hindi, and this naan lives up to its name. The dough is rolled, stretched, and then smacked against the walls of a hot tandoor (clay oven), creating layers of crispy goodness.Each Chur Chur Naan is generously brushed with ghee (clarified butter) and adorned with aromatic herbs like coriander. The result is a textured, flaky bread that pairs wonderfully with a variety of side dishes. Whether enjoyed with curries, chutneys, or as a standalone treat, Chur Chur Naan adds a delightful crunch to your dining experience, making it a popular choice in Indian cuisine.`,
  200,
  require("../assets/images/dish/Paneer-chur-chur-Naan.jpg"),
  3
);
const dishes = [paneer_butter_masala, paneer_khurchan, chur_chur_naan];

export default dishes;
