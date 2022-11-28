import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import notify from "../../ultis/notify";
import * as ApiServices from '../../ApiServices'

function ChangePass() {
  const [oldPass, setOldPass] = useState(null);
  const [newPass, setNewPass] = useState(null);
  const [reNewPass, setReNewPass] = useState(null);

  const change = async() => {
    if (oldPass || newPass || reNewPass) {
      if (newPass !== reNewPass) {
        notify("error", "Re new password is wrong!");
      }else{
        await ApiServices.changePass(oldPass,newPass,reNewPass)
        .then((res)=>{if(res) notify('success','Success')})
        .catch((err)=>{notify('error',err)})
      }
    } else {
      notify("error", "You need fill all information!");
    }
  };
  return (
    <div>
      <Form>
        <FormGroup floating>
          <Input
            id="examplePassword"
            name="password"
            placeholder="Old Password"
            type="password"
            onChange={(e) => setOldPass(e.target.value)}
          />
          <Label for="examplePassword">Old Password</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="example2"
            name="email"
            placeholder="New Password"
            type="password"
            onChange={(e) => setNewPass(e.target.value)}
          />
          <Label for="example2">New Password</Label>
        </FormGroup>
        <FormGroup floating>
          <Input
            id="example1"
            name="email"
            placeholder="Re-new Password"
            type="password"
            onChange={(e) => setReNewPass(e.target.value)}
          />
          <Label for="example1">Re New Password</Label>
        </FormGroup>
        <Button type="button" onClick={change}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ChangePass;
