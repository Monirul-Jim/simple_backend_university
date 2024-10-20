import { TStudent } from "./student.interface";
import { Student } from "./student.models";

// const createStudentIntoDB = async (studentData: TStudent) => {
//   // custom static method
//   if (await Student.isUserExists(studentData.id)) {
//     throw new Error("User already exists static");
//   }
//   const result = await Student.create(studentData);

//   return result;
//   // built in instance method
//   // const student = new Student(studentData);
//   // if (await student.isUserExists(studentData.id)) {
//   //   throw new Error("User already exists");
//   // }
//   // const result = await student.save();
//   // return result;
// };
const getAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};
const getSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  // return result;
  const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};
const deleteSingleStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};
export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
};
