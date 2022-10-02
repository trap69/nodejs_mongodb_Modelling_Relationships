const dotenv = require("dotenv");
const connectDB = require('./config/db');
dotenv.config();

const Author = require('./models/Author');
const Course = require('./models/Course');

connectDB();

async function createAuthor(name, bio, website) { 
    const author = new Author({
      name, 
      bio, 
      website 
    });
  
    const result = await author.save();
    console.log(result);
  }
  
  createAuthor('Arnioldas', 'rzeczpos with javascript', 'https://bandymas.lt/');

  async function createCourse(name, author) {
    const course = new Course({
      name, 
      author
    }); 
    
    const result = await course.save();
    console.log(result);
  }

createCourse('Node Course', '62bc2ef304333aa45e3e108c')
createCourse('JS Course', '62bc2ef304333aa45e3e108c')
createCourse('HTML Course', '62bc2fb74293e161827f57c9')
createCourse('CSS Course', '62bc2fb74293e161827f57c9')

async function listCourses() { 
    const courses = await Course
      .find()
      .populate('author', 'name -_id')
      .select('name');
    console.log(courses);
  }

  listCourses();