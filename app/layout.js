import "./globals.css";


export const metadata = {
	title: "Gustavs Tempelfelds – Tools & Pipeline Developer for Blender",
	description: "Technical artist and tools developer specializing in Blender pipeline automation, add-ons, and production workflows for real-time and CG teams.",


};


export default function RootLayout({ children }) 
{

return(
<html lang="en">
	<body className="antialiased" >
		{children}
      	</body>
</html>
);
}
