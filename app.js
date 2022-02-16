/** @format */

const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

app.listen(port, () => {
	console.log("App listing at port ::: ", port);
});

app.get("/getUser", cors(), (req, res) => {
	res.send({
		fname: "Chamith",
		lname: "Wijesooriya",
		email: "chamith.w@elysiancrest.com",
		country: "Sri Lanka",
		password: "123456789",
	});
});

app.get("/getProducts", cors(), (req, res) => {
	res.send([
		{
			productID: "001",

			productName: "Iphone 13 Pro",
			productPrice: "250000.00",
			shippingCountry: "America",
			image:
				"https://cdn.vodafone.co.uk/en/assets/images/desktop/Apple_iPhone_13_Pro_Max_sierra_blue-full-product-front-600.png",
		},
		{
			productID: "002",
			productName: "MacBook 13 M1",
			productPrice: "350000.00",
			shippingCountry: "America",
			image:
				"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202110?wid=1808&hei=1680&fmt=png-alpha&.v=1632788573000",
		},
		{
			productID: "003",
			productName: "MacBook 13 Pro",
			productPrice: "356000.00",
			shippingCountry: "America",
			image:
				"https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202011_GEO_US?wid=1280&hei=1190&fmt=png-alpha&.v=1632948875000",
		},
		{
			productID: "004",
			productName: "PowerBank",
			productPrice: "2500.00",
			shippingCountry: "America",
			image:
				"https://www.innovink.lk/wp-content/uploads/2022/01/Baseus-Bipow-20W-Digital-Display-10000mAh-Power-Bank-Baseus-1.png",
		},
		{
			productID: "005",
			productName: "Usb type-C Cable ",
			productPrice: "250.00",
			shippingCountry: "America",
			image:
				"https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/u/g/ugreen_90_degree_usb_type_c_cable.png",
		},
		{
			productID: "006",
			productName: "Usb MicroUsb Cable",
			productPrice: "200.00",
			shippingCountry: "America",
			image:
				"https://cdn.shopify.com/s/files/1/2808/7920/products/133009-00MBL_USB_BLKGOLD_3ft_grande_87e7cedd-c2a3-4cf7-aa70-9304876c68fc_400x.png?v=1539197793",
		},
		{
			productID: "007",
			productName: "Samsung Galaxy S22",
			productPrice: "350000.00",
			shippingCountry: "America",
			image:
				"https://images.samsung.com/is/image/samsung/p6pim/uk/galaxy-s21/gallery/uk-galaxy-s21-5g-g991-371424-sm-g991bzadeea-368871638?$2160_1728_PNG$",
		},
		{
			productID: "008",
			productName: "Apple Home Pod",
			productPrice: "3500.00",
			shippingCountry: "America",
			image:
				"https://www.dimprice.com/image/cache/png/apple-homepod-mini/Black/apple-homepod-mini-01-550x550.png",
		},
		{
			productID: "009",
			productName: "Apple AirPods",
			productPrice: "35000.00",
			shippingCountry: "America",
			image: "https://www.dialog.lk/dialogdocroot/content/images/devices/apple-airpod-pro.png",
		},
		{
			productID: "010",
			productName: "GoPro Hero 10",
			productPrice: "126000.00",
			shippingCountry: "America",
			image: "https://www.videolane.com/wp-content/uploads/2021/09/GoPro-Hero-10-2021.png",
		},
	]);
});
