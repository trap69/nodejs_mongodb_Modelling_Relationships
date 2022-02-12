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
  
  //createAuthor('Jolita', 'engage with javascript', 'https://programink.lt/');

  async function createCourse(name, author) {
    const course = new Course({
      name, 
      author
    }); 
    
    const result = await course.save();
    console.log(result);
  }

//   createCourse('Node Course', '6207b9782df070e9a161c6fc')
//   createCourse('JS Course', '6207b9782df070e9a161c6fc')
//   createCourse('HTML Course', '6207b9782df070e9a161c6fc')
//   createCourse('CSS Course', '6207b9782df070e9a161c6fc')

async function listCourses() { 
    const courses = await Course
      .find()
      .populate('author')
      .select('name');
    console.log(courses);
  }

  listCourses();