import {useState} from "react"
import useStudent from "../hooks/useStudent"
function List() {
    const [name, setName] = useState("")
    const [studentList,newStudentList,handleFunction] = useStudent();
    return (
        <div style={{width:"20%", margin:"5%", fontSize: "18px"}}>
            <div style={{display:"flex", flexDirection:"row", alignItems:"baseline"}}>
                <h4>{"学生一覧 :"} &nbsp;</h4>
                <div>[{studentList.map((item, index) => {
                    return item.name
                }).join(", ")}]</div>
            </div>
            <br />
            <h4>{"削除する名前を入力してください。"}</h4>
            <br />
            <div style={{display:"flex"}}>
                <div style={{display:"flex", flexDirection:"row", alignItems:"baseline", marginRight:"10%"}}>
                    <input value={name} onChange={(event) => setName(event.target.value)} id="name" style={{padding:"5px 5px"}}/>
                </div>
                <br />
                <div style={{display:"flex", flexDirection:"row", alignItems:"baseline", justifyContent: "flex-end"}}>
                    <button onClick={()=>{handleFunction.deleteStudent(name)}} style={{padding:"5px"}}>{"確定"}</button>
                </div>
            </div>
            <br />
            <div style={{display:"flex", flexDirection:"row", alignItems:"baseline"}}>
                <h4>{"削除する名前 :"}&nbsp;</h4>
                <div>{name}</div>
            </div>
            <br />
            <div style={{display:"flex", flexDirection:"row", alignItems:"baseline"}}>
                <h4>{"新しい一覧 :"} &nbsp;</h4>
                <div>[{newStudentList.map((item, index) => {
                    return item.name
                }).join(", ")}]</div>
            </div>
        </div>
    );
}
export default List