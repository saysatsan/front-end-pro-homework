const roles = {
	admin: "img/superwoman.png",
	student: "img/superman.png",
	lector: "img/superwoman2.png"
};

const gradation = {
	20: "satisfactory",
	55: "good",
	85: "very-good",
	100: "excellent"
};

const users = [
	{
		name: "Jack Smith",
		age: 23,
		img: "img/man.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 20
			},
			{
				"title": "Java Enterprise",
				"mark": 100
			}
		]
	},
	{
		name: "Amal Smith",
		age: 20,
		img: "img/man.png",
		role: "student"
	},
	{
		name: "Noah Smith",
		age: 43,
		img: "img/man.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 50
			}
		]
	},
	{
		name: "Charlie Smith",
		age: 18,
		img: "img/man.png",
		role: "student",
		courses: [
			{
				"title": "Front-end Pro",
				"mark": 75
			},
			{
				"title": "Java Enterprise",
				"mark": 23
			}]
	},
	{
		name: "Emily Smith",
		age: 30,
		img: "img/man.png",
		role: "admin",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 10,
				"lector": "Leo Smith"
			},
			{
				"title": "Java Enterprise",
				"score": 50,
				"lector": "David Smith"
			},
			{
				"title": "QA",
				"score": 75,
				"lector": "Emilie Smith"
			}]
	},
	{
		name: "Leo Smith",
		age: 253,
		img: "img/man.png",
		role: "lector",
		courses: [
			{
				"title": "Front-end Pro",
				"score": 78,
				"studentsScore": 79
			},
			{
				"title": "Java Enterprise",
				"score": 85,
				"studentsScore": 85
			}
		]
	}
]



function grade(mark) {
    for (let range in gradation) {
        if (mark <= parseInt(range, 10)) {
            return gradation[range];
        }
    }   
}


class User {
	constructor(user) {
	  this.user = user;
	}
  
	render() {
	  const { name, age, img, role, courses } = this.user;	
	  
	  const userBlock = document.createElement('div');
	  userBlock.classList.add('user');

	  const userInfo = document.createElement('div');
	  userInfo.classList.add('user__info');

	  const userData = document.createElement('div');
	  userData.classList.add('user__info--data');

	  const userName = document.createElement('div');
	  userName.classList.add('user__naming');
	  userName.innerHTML = `
		<p>Name: <b>${name}</b></p>
		<p>Age: <b>${age}</b></p>
	  `;

	  const userImg = document.createElement('img');
	  userImg.src = img;
	  userImg.alt = role;
	  userImg.height = 50;

	  const userRoleImg = roles[role] ;
	  const userRoleText = role; 
  
	  userData.append(userImg);
	  userData.append(userName);
  
	  const userRoleInfo = document.createElement('div');
	  userRoleInfo.classList.add('user__info--role', role);
	  userRoleInfo.innerHTML = `
		<img src="${userRoleImg}" alt="${role}" height="25">
		<p>${userRoleText}</p>
	  `;
  
	  userInfo.append(userData);
	  userInfo.append(userRoleInfo);
  
	  userBlock.append(userInfo);
  
	  if (courses && courses.length > 0) {
		this.renderCourses(userBlock, courses, role);
	  }
  
	  return userBlock;
	}
  
	renderCourses(userBlock, courses, role) {
	  const coursesBlock = document.createElement('div');
	  coursesBlock.classList.add('user__courses');
		
	  courses.forEach(course => {
		const courseItem = document.createElement('div');
		courseItem.classList.add('user__courses--course', role);
  
		let courseText = this.getCourseText(course, role);
		  
		courseItem.innerHTML = courseText;
		coursesBlock.append(courseItem);
	  });

	  userBlock.append(coursesBlock);
	  
	  return coursesBlock;
	}

	getCourseText(course){
		return `<p>${course.title} <span class="${grade(course.mark)}">${grade(course.mark)}</span></p>`;
	}
}
  
class Student extends User {
	renderCourses(userBlock, courses, role) {
	  super.renderCourses(userBlock, courses, role);	  
	}
}
  
class Lector extends User {
	renderCourses(userBlock, courses, role) {
		const coursesBlock = super.renderCourses(userBlock, courses, role);
		coursesBlock.classList.add('admin--info');
	}

	getCourseText(course) {		
		return `
		  <p>Title: <b>${course.title}</b></p>
		  <p>Lector's score: <span class="${grade(course.score)}">${grade(course.score)}</span></p>
		  <p>Average student's score: <span class="${grade(course.studentsScore)}">${grade(course.studentsScore)}</span></p>
		`;
	}	
}  

class Admin extends User {
	renderCourses(userBlock, courses, role) {
		const coursesBlock = super.renderCourses(userBlock, courses, role);
		coursesBlock.classList.add('admin--info');
	}	

	getCourseText(course) {		
		return `
		  <p>Назва: <b>${course.title}</b></p>
		  <p>Оцінка адміна: <span class="${grade(course.score)}">${grade(course.score)}</span></p>
		  <p>Лектор: <b>${course.lector}</b></p>
		`;
	}
}
  
const userContainer = document.querySelector('.users');
  
users.forEach(userData => {
	let user;

	if (userData.role === 'student') {
	  user = new Student(userData);
	} else if (userData.role === 'lector') {
	  user = new Lector(userData);
	} else if (userData.role === 'admin') {
	  user = new Admin(userData);
	}
  
	const userBlock = user.render();
	userContainer.append(userBlock);
});
  


