import { useState } from "react";
// import Form from "./form";
import ShowCode from "./showCode";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";

export default function TableElement() {
  const [noOfElements, setNoOfElements] = useState(1);
  const [obj, setObj] = useState({});
  // const [s, ss] = useState("");
  const [show, setShow] = useState(false);

  // const inc=()=>{
  //   arr.push(obj)
  //   setObj=

  // }
  const [arr,seta]=useState([])
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const id = e.currentTarget.parentNode.parentNode.id;
    setObj((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        [name]: value,
      },
    }));
   
  };
  const submit = (e) => {
    e.preventDefault();
    alert(obj);
    // for (let i = 0; i < noOfElements; i++) {
    //   ss((e) =>
    //     s.concat(
    //       ...e,
    //       `<div><label>${obj[i].name}</label><input type={${obj[i].type}} value={${obj[i].name}} /> </div>\n`
    //     )
    //   );
    // }
    seta((prev)=>[...prev,obj])
    setShow(true);
    console.log(obj);
  };

  return (
    <div className="d-flex justify-content-around">
      {!show && <div>
        <Button onClick={() => setNoOfElements((e) => e + 1)}>add</Button>
        {<Form>
          {[...Array(noOfElements)].map((e, i) => (
            <div key={i} id={i} className="d-flex">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>name</Form.Label>
                <Form.Control
                  type="email"
                  name="name"
                  placeholder="Enter email"
                  value={obj[i]?.name || ""}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>type</Form.Label>
                <Form.Select
                  type="text"
                  name="type"
                  placeholder="Enter email"
                  value={obj[i]?.type || ""}
                  onChange={handleChange}
                >
                  {/* <option>Open this select menu</option> */}
                  <option value="text">text</option>
                  <option value="email">email</option>
                  <option value="password">password</option>
                  <option value="button">button</option>
                </Form.Select>
              </Form.Group>
            </div>
          ))}

          <Button onClick={submit}></Button>
        </Form>}
      </div>}
      <div>{show && <ShowCode object={arr} len={noOfElements} />}</div>
    </div>
  );
}
