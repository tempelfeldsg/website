import "./globals.css";


export const metadata = {
	title: "Gustavs Tempelfelds – Technical Artist & Pipeline Developer",
	description: "Portfolio of Gustavs Tempelfelds, technical artist and pipeline developer focused on real-time graphics, tools, and production workflows.",

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
