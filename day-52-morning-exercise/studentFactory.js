function studentFactory(course){
  
  return (name, gender, age) => {
    let student = {
      name: name,
      gender: gender,
      age: age,
      course: course
    } 
    return student
  }
}

let generateSeiStudent = studentFactory("sei")

// returns:
//    { name: "denisse", gender: "female", age: 23, course: "sei" }
generateSeiStudent("denisse", "female", 23)
