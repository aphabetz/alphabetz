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
const metaLogoPath = "/assets/images/logo.png";
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
    title: "Alphabetz Preschool Dongargarh | Quality Early Education",
    metaDescription: "Alphabetz  Preschool in Dongargarh offers a nurturing environment for early childhood education. Enroll your child for a fun and interactive learning experience.",
    metaImage: `${baseUrl}/${metaLogoPath}`,
    keywords: "Alphabetz Preschool, Preschool in Dongargarh, Best preschool in Chhattisgarh, Early childhood education, Play school in Dongargarh, Kindergarten in Dongargarh, Kids learning center",
    canonical: `${baseUrl}`,
};

   
   
    res.render('index', {body: "",baseUrl,latestImages, websiteID,popupbanners,testimonial,blogs,gallery,clients, API_BASE_URL,WEBSITE_ID_KEY, seoDetails,banners});
});


app.get('/about', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "About Alphabetz Preschool Dongargarh | Nurturing Early Learning",
        metaDescription: "Learn about Alphabetz  Preschool in Dongargarh, our vision, mission, and commitment to providing high-quality early childhood education in a safe and engaging environment.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "About Alphabetz Preschool, Preschool in Dongargarh, Early childhood education, Play school mission, Kindergarten philosophy, Best preschool in Chhattisgarh",
        canonical: `${baseUrl}/about`,
    };
    
   
    res.render('about', {body: "",baseUrl, seoDetails});
});


app.get('/our-spaces', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "Our Spaces | Alphabetz Preschool Dongargarh - Safe & Fun Learning",
        metaDescription: "Explore the well-designed learning spaces and child-friendly amenities at Alphabetz International Preschool Dongargarh. A safe, engaging, and fun environment for kids.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "Preschool amenities, Best preschool in Dongargarh, Learning spaces for kids, Child-friendly classrooms, Safe play area, Kindergarten infrastructure, Play school facilities",
        canonical: `${baseUrl}/our-spaces`,
    };
   
    res.render('our-spaces', { body: "", baseUrl, seoDetails });
});


app.get('/our-curriculum', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "Our Curriculum | Alphabetz Preschool Dongargarh - Play-Based Learning",
        metaDescription: "Discover the innovative curriculum at Alphabetz Preschool Dongargarh, designed to nurture creativity, cognitive skills, and social growth through play-based learning.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "Preschool curriculum, Best curriculum for kids, Play-based learning, Early childhood education, Learning through play, Kindergarten syllabus, Montessori approach",
        canonical: `${baseUrl}/our-curriculum`,
    }; 
   
    res.render('our-curriculum', { body: "", baseUrl, seoDetails });
});


app.get('/a-day-at-alphabetz', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "A Day at Alphabetz | Fun & Learning at Alphabetz Preschool Dongargarh",
        metaDescription: "Experience a day in the life of a child at Alphabetz Preschool Dongargarh – filled with fun activities, interactive learning, and creative play in a nurturing environment.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "Preschool daily schedule, A day at preschool, Kids daily activities, Kindergarten routine, Fun learning for kids, Early education, Preschool timetable",
        canonical: `${baseUrl}/a-day-at-alphabetz`,
    }; 
   
    res.render('a-day-at-alphabetz', { body: "", baseUrl, seoDetails });
});

app.get('/our-programmes', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "Our Programmes | Alphabetz Preschool Dongargarh - Learning for Every Age",
        metaDescription: "Explore the diverse preschool programmes at Alphabetz Dongargarh, designed for toddlers, nursery, and kindergarten students to build strong learning foundations.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "Preschool programmes, Best preschool in Dongargarh, Early childhood education, Toddler learning, Kindergarten curriculum, Nursery classes, Child development programmes",
        canonical: `${baseUrl}/our-programmes`,
    }; 
   
    res.render('our-programmes', { body: "", baseUrl, seoDetails });
});


app.get('/alphabetz-commits', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "Alphabetz Commits | Our Promise to Quality Preschool Education",
        metaDescription: "At Alphabetz Preschool Dongargarh, we are committed to providing a safe, nurturing, and engaging environment where children thrive through quality early education.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "Preschool commitments, Safe learning environment, Quality education for kids, Early childhood care, Best preschool facilities, Kids learning commitment",
        canonical: `${baseUrl}/alphabetz-commits`,
    }; 
   
    res.render('commits', { body: "", baseUrl, seoDetails });
});


app.get('/smart-speak', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "Smart Speak | Language & Communication Development for Kids",
        metaDescription: "Smart Speak at Alphabetz Preschool helps children develop early communication skills, language proficiency, and confidence through interactive learning.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "Smart Speak, Kids communication skills, Language development for children, Preschool speaking programs, Early childhood speech development",
        canonical: `${baseUrl}/smart-speak`,
    }; 
   
    res.render('smart-speak', { body: "", baseUrl, seoDetails });
});


app.get('/admission', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const websiteID = await getWebsiteID();
    const seoDetails = {
        title: "Admission | Enroll Your Child at Alphabetz Preschool Dongargarh",
        metaDescription: "Join Alphabetz Preschool today! Get admission details, eligibility, and process to enroll your child in a fun and nurturing learning environment.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "Preschool admission, Alphabetz enrollment, Admission process for preschool, Kindergarten admission Dongargarh, Early childhood education",
        canonical: `${baseUrl}/admission`,
    }; 
   
    res.render('admission', { body: "", baseUrl, websiteID, API_BASE_URL, WEBSITE_ID_KEY, BOOKING_ENQUIRY_DYNAMIC_FIELDS_KEYS, seoDetails });
});





app.get('/gallery', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const gallery = await getgallery();
    
    const seoDetails = {
        title: "Gallery | Explore Alphabetz Preschool in Dongargarh",
        metaDescription: "Discover the vibrant learning spaces at Alphabetz Preschool in Dongargarh. Browse high-quality images of our classrooms, play areas, activities, and more.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "Alphabetz Preschool gallery, Dongargarh preschool images, Early learning center photos, Kids activity space, Kindergarten environment",
        canonical: `${baseUrl}/gallery`,
    };

    res.render('gallery', { body: "", gallery, seoDetails });
});
app.get('/gallery/:filter', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const { filter } = req.params;
    const gallery = await getgallery();

    const seoDetails = {
        title: `Alphabetz Preschool Gallery | ${filter} Images & Activities`,
        metaDescription: `Explore photos of ${filter} at Alphabetz Preschool in Dongargarh. See how we create a nurturing, fun, and educational environment for young learners.`,
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: `Alphabetz Preschool ${filter} images, Dongargarh preschool gallery, Kids activities, Early education spaces, Fun learning areas`,
        canonical: `${baseUrl}/gallery/${filter}`,
    };

    res.render('gallery', { body: "", gallery, seoDetails });
});







app.get('/contact', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const websiteID = await getWebsiteID(); 
    
    const seoDetails = {
        title: "Contact Alphabetz Preschool | Get in Touch with Us",
        metaDescription: "Have questions about admissions, programs, or facilities? Contact Alphabetz Preschool in Dongargarh for inquiries, support, and more. We’re happy to assist you!",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "Contact Alphabetz Preschool, Preschool admission inquiries, Get in touch with Alphabetz, Alphabetz Preschool Dongargarh contact",
        canonical: `${baseUrl}/contact`,
    };

    res.render('contact', { body: "", websiteID, API_BASE_URL, WEBSITE_ID_KEY, CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS, seoDetails });
});
app.get('/career', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const websiteID = await getWebsiteID();
    
    const seoDetails = {
        title: "Join Alphabetz Preschool | Career Opportunities in Early Education",
        metaDescription: "Looking to build a career in early childhood education? Explore job openings at Alphabetz Preschool in Dongargarh. Join our passionate team and help shape young minds.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "Alphabetz Preschool careers, Teaching jobs at Alphabetz, Preschool job openings, Early education careers in Dongargarh",
        canonical: `${baseUrl}/career`,
    };

    res.render('career', { body: "", seoDetails, websiteID, API_BASE_URL, WEBSITE_ID_KEY, CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS });
});


app.get('/blogs', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
  
    const blogs = await getBlog();
    const seoDetails = {
        title: "Alphabetz Blog | Early Childhood Education Tips & Parenting Insights",
        metaDescription: "Explore expert articles on preschool education, child development, parenting tips, and learning activities. Stay updated with Alphabetz Preschool’s latest blogs.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "Alphabetz Preschool blog, Early childhood education tips, Parenting advice, Child development articles, Learning activities for preschoolers",
        canonical: `${baseUrl}/blogs`,
    };

    res.render('blogs', { body: "", blogs, baseUrl, seoDetails });
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