import React from "react"
const useStudent = () =>{
    const initData = [
        {
            key: 1,
            name: "Huyen"
        },
        {
            key: 2,
            name: "Hoa"
        },
        {
            key: 3,
            name: "Hung"
        },
        {
            key: 4,
            name: "Long"
        }
    ];
    const [studentList, setStudentList] = React.useState([...initData])
    const [newStudentList, setNewStudentList] = React.useState([...initData])
    const deleteStudent = (name) => {
        const index = newStudentList.findIndex((item, index) => item.name === name)
        if (index > -1){
            newStudentList.splice(index, 1)
            setNewStudentList([...newStudentList])
        }
    }
    return [studentList, newStudentList, {deleteStudent}]
}
export default useStudent;