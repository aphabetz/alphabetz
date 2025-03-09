require('dotenv').config();  // Load environment variables from .env file
const { API_BASE_URL , WEBSITE_ID_KEY} = require('./config/config');
const { getWebsiteID } = require('./utils/helper');
const { getHomeDesktopBanner ,gettestimonial ,getAdBanner,getHomepopupBanner ,getclientle  } = require('./controller/homecontroller');
const { getBlog ,getBlogfull} = require('./controller/blogcontroller');
const { getgallery,getLatestGalleryImages} = require('./controller/gallerycontroller');
const { CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS ,CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS , BOOKING_ENQUIRY_DYNAMIC_FIELDS_KEYS} = require('./config/config');

const express = require('express');
const path = require('path');
const app = express();
const port = 3005;
const metaLogoPath = "/assets/images/icon/logo.webp";
// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Define the views directory

// Serve static files (like CSS, images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const websiteID = await getWebsiteID(); 
    const banners = await getHomeDesktopBanner();
    const testimonial = await gettestimonial();
    const blogs = await getBlog();
    const gallery= await getgallery();
    const clients = await getclientle();
    const popupbanners = await getHomepopupBanner();
   const latestImages = await getLatestGalleryImages();
    const seoDetails = {
            title: "Alphabetz Pre-School Dongargarh",
            metaDescription: "Discover a premium schooling experience in dongargarh at alphabetz. Designed for kids, we provide a productive, flexible, and inspiring environment.",
            metaImage: `${baseUrl}/${metaLogoPath}`,
            keywords:"Karyasiddhi coworking,Coworking space in Raipur,Best coworking amenities Raipur,Affordable coworking Raipur ",
            canonical:`${baseUrl}/${metaLogoPath}`,
    } 
   
   
    res.render('index', {body: "",baseUrl,latestImages, websiteID,popupbanners,testimonial,blogs,gallery,clients, API_BASE_URL,WEBSITE_ID_KEY, seoDetails,banners});
});


app.get('/about', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: ``,
        keywords:" ",
        canonical:"",
    } 
   
    res.render('about', {body: "",baseUrl, seoDetails});
});



app.get('/our-spaces', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: ``,
        keywords:" ",
        canonical:"",
    } 
   
    res.render('our-spaces', {body: "",baseUrl, seoDetails});
});


app.get('/our-curriculum', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: ``,
        keywords:" ",
        canonical:"",
    } 
   
    res.render('our-curriculum', {body: "",baseUrl, seoDetails});
});


app.get('/a-day-at-alphabetz', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: ``,
        keywords:" ",
        canonical:"",
    } 
   
    res.render('a-day-at-alphabetz', {body: "",baseUrl, seoDetails});
});


app.get('/our-programmes', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: ``,
        keywords:" ",
        canonical:"",
    } 
   
    res.render('our-programmes', {body: "",baseUrl, seoDetails});
});




app.get('/alphabetz-commits', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: ``,
        keywords:" ",
        canonical:"",
    } 
   
    res.render('commits', {body: "",baseUrl, seoDetails});
});


app.get('/smart-speak', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: ``,
        keywords:" ",
        canonical:"",
    } 
   
    res.render('smart-speak', {body: "",baseUrl, seoDetails});
});


app.get('/admission', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const websiteID = await getWebsiteID();
    const seoDetails = {
        title: "",
        metaDescription: "",
        metaImage: ``,
        keywords:" ",
        canonical:"",
    } 
   
    res.render('admission', {body: "",baseUrl,websiteID,API_BASE_URL,WEBSITE_ID_KEY, BOOKING_ENQUIRY_DYNAMIC_FIELDS_KEYS ,seoDetails});
});




// app.get('/services', async (req, res) => {
//     const location= await getlocation();
//     const baseUrl = req.protocol + '://' + req.get('Host');
//     const seoDetails = {
//         title: "Karyasiddhi Coworking Services | Flexible & Professional Workspaces",
//         metaDescription: "Explore the exceptional coworking services at Karyasiddhi in Raipur. Tailored to meet the needs of professionals and businesses, our flexible workspaces provide the perfect balance of productivity and comfort, with premium amenities and a collaborative environment.",
//         metaImage: `${baseUrl}/${metaLogoPath}`,
//         keywords:"Coworking space services Raipur,Flexible workspaces Raipur,Professional coworking services,Productive coworking environment ",
//         canonical:"https://www.karyasiddhico.work/services",
//     } 
   
//     res.render('services', {body: "",location, seoDetails});
// });
// app.get('/service-details/:serviceId', async (req, res) => {  
//     const { serviceId } = req.params;
//     const baseUrl = req.protocol + '://' + req.get('Host');
//     const websiteID = await getWebsiteID();  
//     const location = await getlocation();   
    

//     let serviceName = '';

//     // Map serviceId to a service name
//     if (serviceId === 'coworking-seat') {
//         serviceName = 'Coworking Seat';
//         description = 'Discover the ideal flexible coworking spaces at Karyasiddhi. Designed for professionals and businesses, our flexible workspaces in Raipur offer a productive environment tailored to your needs. Join a community that fosters collaboration and creativity.';
//          keywords=`Flexible coworking spaces Raipur,Coworking space for professionals Raipur,Flexible workspaces Raipur,Collaborative coworking Raipur,Coworking space with flexible seating`
//     } else if (serviceId === 'private-cabin') {
//         serviceName = 'Private Cabin';
//         description =`Experience privacy and productivity with Karyasiddhi's private cabins in Raipur. Perfect for teams or individuals looking for a focused workspace, our cabins offer a professional and quiet environment to get work done efficiently.`;
//         keywords=`Private cabins Raipur,
//         Private offices Raipur,
//         Coworking private cabins,
//         Quiet workspaces Raipur,
//         Professional private cabin Raipur`
//     } else if (serviceId === 'meeting-room') {
//         serviceName = 'Meeting Room';
//         description =`Host professional meetings and collaborations in our fully-equipped meeting rooms at Karyasiddhi. Located in Raipur, our meeting rooms provide a productive and comfortable space for presentations, team discussions, and more`;
//         keywords=`Meeting rooms Raipur,Conference rooms Raipur,Professional meeting rooms Raipur,Meeting rooms with amenities Raipur,Fully equipped meeting rooms Raipur`
//     } else if (serviceId === 'one-day-pass') {
//         serviceName = 'One Day Pass';
//         description =`Try Karyasiddhi's coworking space with our convenient one-day passes in Raipur. Perfect for short-term needs, our day passes offer full access to premium workspaces, giving you the flexibility to work when and where you need it`;
//         keywords=`One-day coworking pass Raipur,Day pass coworking Raipur,Flexible day pass coworking,Temporary coworking access Raipur`
//     } else if (serviceId === 'weekly-pass') {
//         serviceName = 'Weekly Pass';
//         description =`Make the most of your week with Karyasiddhi's weekly passes. Access our premium coworking space in Raipur, offering flexible seating, high-speed internet, and a collaborative environment to meet your professional needs.`;
//         keywords=`Weekly coworking pass Raipur,Flexible weekly pass coworking,Coworking weekly access Raipur,Weekly coworking membership Raipur,Short-term coworking pass Raipur`
//     }

//     const seoDetails = {
//         title: `${serviceName} at Karyasiddhi | Your Perfect Workspace in Raipur`,
//         metaDescription: `${description}`,
//         metaImage: `${baseUrl}/${metaLogoPath}`,
//         keywords: `${keywords}`,
//         canonical: `https://www.karyasiddhico.work/service-details/${serviceId}`,
//     };
//     res.render('details', { seoDetails, serviceId, serviceName, websiteID, API_BASE_URL, WEBSITE_ID_KEY, location, BOOKING_ENQUIRY_DYNAMIC_FIELDS_KEYS });  // Pass serviceId to the detailed.ejs page
// });

app.get('/gallery', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const gallery= await getgallery();
    console.log(process.env.S3_BASE_url)
    const seoDetails = {
        title: "Gallery of Karyasiddhi Coworking Spaces | Explore Our Workspaces and Amenities",
        metaDescription: "Explore the Karyasiddhi gallery showcasing our coworking spaces . View high-quality images of our flexible workspaces, meeting rooms, private cabins, and more. See how our spaces support productivity and creativity.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"Karyasiddhi gallery,Coworking spaces  images,Flexible workspaces ,Karyasiddhi coworking photos ",
        canonical:"https://www.karyasiddhico.work/gallery",
    } 
   
    res.render('gallery', {body: "", gallery,seoDetails});
});

app.get('/gallery/:filter', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const {filter} = req.params;
    const gallery= await getgallery();
   
    const seoDetails = {
        title: `Gallery of Karyasiddhi Coworking Spaces in ${filter} | Explore Our Workspaces and Amenities`,
        metaDescription: "Explore the Karyasiddhi gallery showcasing our coworking spaces . View high-quality images of our flexible workspaces, meeting rooms, private cabins, and more. See how our spaces support productivity and creativity.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"Karyasiddhi gallery,Coworking spaces  images,Flexible workspaces ,Karyasiddhi coworking photos ",
        canonical:`https://www.karyasiddhico.work/gallery/${filter}`,
    } 
   
    res.render('gallery', {body: "", gallery,seoDetails});
});





// app.get('/bookseat', async (req, res) => {
//     const baseUrl = req.protocol + '://' + req.get('Host');
//     const websiteID = await getWebsiteID(); 
//     const location= await getlocation();
//     const clients = await getclientle();
//     const seoDetails = {
//         title: "Book Your Coworking Seat at Karyasiddhi | Flexible Workspaces in Raipur",
//         metaDescription: "Secure your spot at Karyasiddhi coworking spaces. Fill out the form to book a flexible coworking seat at our Raipur location. Get access to premium workspaces and amenities designed for productivity.",
//         metaImage: `${baseUrl}/${metaLogoPath}`,
//         keywords:"Book coworking seat Raipur,Coworking space booking form,Reserve a workspace Raipur,Flexible coworking seat booking,Coworking seat reservation Raipur ",
//         canonical:"https://www.karyasiddhico.work/bookseat",
//     } 
   
//     res.render('bookseat', {body: "",seoDetails ,websiteID,API_BASE_URL,WEBSITE_ID_KEY,location,clients, BOOKING_ENQUIRY_DYNAMIC_FIELDS_KEYS});
// });





app.get('/contact', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const websiteID = await getWebsiteID(); 
    const seoDetails = {
        title: "Contact Karyasiddhi Coworking Space | Get in Touch for Inquiries and Support",
        metaDescription: "Have questions or need assistance? Contact Karyasiddhi coworking space for inquiries, booking details, or support. We’re here to help you with flexible workspaces and more. Reach out to us today.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"Contact Karyasiddhi coworking,Get in touch with coworking space,Karyasiddhi contact page,Contact us coworking Raipur ",
        canonical:"https://www.karyasiddhico.work/contact",
    } 
   
    res.render('contact', {body: "",websiteID,API_BASE_URL,WEBSITE_ID_KEY,CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS, seoDetails});
});


app.get('/career', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const websiteID = await getWebsiteID();
    const seoDetails = {
        title: "Join the Karyasiddhi Team | Career Opportunities at Our Coworking Space",
        metaDescription: "Explore exciting career opportunities at Karyasiddhi. Send us your resume and be part of a growing team in a dynamic coworking environment. Apply now and help us shape the future of coworking spaces.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:" Career opportunities at Karyasiddhi,Join Karyasiddhi team,Coworking space job openings",
        canonical:"https://www.karyasiddhico.work/career",
    } 
   
    res.render('career', {body: "", seoDetails, websiteID,API_BASE_URL,WEBSITE_ID_KEY,CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS});
});


app.get('/blogs', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
  
    const blogs = await getBlog();
    const seoDetails = {
        title: "Karyasiddhi Blog | Latest News and Insights on Coworking Spaces and Productivity",
        metaDescription: "Explore the Karyasiddhi blog for the latest updates, tips, and insights on coworking spaces, productivity, and business growth. Stay informed with our expert articles and discover how coworking can benefit you.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"Karyasiddhi blog,Coworking space blog,Coworking space tips,Business growth through coworking ",
        canonical:"https://www.karyasiddhico.work/blogs",
    } 
   
    res.render('blogs', {body: "",blogs,baseUrl, seoDetails});
});



app.get('/thankyou', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "Thank You for Contacting Us | Your Request Has Been Received",
        metaDescription: "Thank you for reaching out to Alphabetz. We have received your request and will get back to you shortly. Stay tuned for further updates.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"Thank you page, request confirmation,Thank you message ",
        canonical:"",
    } 
    res.render('thankyou', {body: "",seoDetails});
});




app.get('/blog/:slug', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const { slug } = req.params; // Extract slug from params
    const blogfull = await getBlogfull(slug);
    const testimonial = await gettestimonial();
    const websiteID = await getWebsiteID(); 
   
    const adbanner = await getAdBanner();
    const blogs = await getBlog();
    // Extract the first 50 words from the description
    const truncateToWords = (text, wordCount) => {
        if (!text) return '';
        return text.split(' ').slice(0, wordCount).join(' ') + '...';
    };
    const truncatedDescription = truncateToWords(blogfull?.description, 25);

    // Set the meta image dynamically
   
  
    const seoDetails = {
        title: blogfull?.title,
        metaDescription: truncatedDescription, // Use the truncated description
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: `${blogfull.seoDetails.tags}`,
        canonical:`https://www.karyasiddhico.work/blog/${slug}`,
    };

    res.render('blogpost', {
        body: "",
       baseUrl,
        blogfull,
        seoDetails,
        adbanner,
        blogs,
       testimonial,websiteID,API_BASE_URL,WEBSITE_ID_KEY, BOOKING_ENQUIRY_DYNAMIC_FIELDS_KEYS
    });
});

app.use(async (req, res, next) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "404 - Page Not Found | Alphabetz",
        metaDescription: "Sorry, the page you are looking for cannot be found. Please check the URL or visit our homepage for more information.",
        metaImage: `${baseUrl}/assets/images/icon/metalogo.png`, // Replace with correct path if needed
        keywords: "404 page not found,  page not found, Error page , error",
        canonical: baseUrl + req.originalUrl, // You can use the original URL for canonical
    };
    

    res.status(404).render('404', { seoDetails });
});




app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });