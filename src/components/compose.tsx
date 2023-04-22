import React, {useState} from 'react';
import '../styles/compose.css';
import attach from "../assets/paper-clip-14002(1).svg";
import contact from "../assets/icons8-contacts.svg";
// import departments from "/home/ashmitha/Frontend/src/components/contact_data.tsx";

const departments = [    
    ["EE ",  " hodee@.iitm.iac.in"],
    ["CY ", " cyhead@iitm.ac.in"],
    ["CE ", " cehod@iitm.ac.in"],
    ["HS ", " hshead@iitm.ac.in"],
    ["MM ", " mmhead@iitm.ac.in"],
    ["PH ", " hod@physics.iitm.ac.in"],
    ["AE ", " aehead@iitm.ac.in"],
    ["AM ", " amhead@iitm.ac.in"],
    ["BE ", " bthead@iitm.ac.in"],
    ["CH ", " headche@iitm.ac.cin"],
    ["CE ", " cehod@iitm.ac.in"],
    ["ED ", " edhead@iitm.ac.in"],
    ["Management Studies ", " mshead@iitm.ac.in"],
    ["Mathematics ", " mahead@iitm.ac.in"],
    ["ME ", " mehead@iitm.ac.in"],
    ["OE ", " oehead@iitm.ac.in"]
];

const hostels = [
    ["Alaknanda ", " wardenalak@smail.iitm.ac.in"],
    ["Mandakini A "," wardenmandakinia@smail.iitm.ac.in"],
    ["Cauvery "," wardencauvery@smail.iitm.ac.in"],
    ["Bhadra ",	" wardenbhadra@smail.iitm.ac.in"],
    ["Brahmaputra "," wardenbrahma@smail.iitm.ac.in"],
    ["Ganga ",	" wardenganga@smail.iitm.ac.in"],
    ["Godavari "," wardengodavari@smail.iitm.ac.in"],
    ["Jamuna ",	" wardenjamuna@smail.iitm.ac.in"],
    ["Krishna ",	" wardenkrishna@smail.iitm.ac.in"],
    ["Mahanadhi ", " wardenmahanadhi@smail.iitm.ac.in"],
    ["Mandakini B ", " wardenmandakinib@smail.iitm.ac.in"],
    ["Mandakini A ", " wardenmandakinia@smail.iitm.ac.in"],
    ["Narmada ",	" wardennarmada@smail.iitm.ac.in"],
    ["Pampa ",	" wardenpampa@smail.iitm.ac.in"],
    ["Sabarmati ", " wardensabar@smail.iitm.ac.in"],
    ["Saraswathi ",	" wardensaras@smail.iitm.ac.in"],
    ["Sarayu ",	" wardensarayu@smail.iitm.ac.in"],
    ["Sharavathi ", "wardensharav@smail.iitm.ac.in"],
    ["Sindhu ",	" wardensindhu@smail.iitm.ac.in"],
    ["Swarnamukhi "," wardenswarnamukhi@smail.iitm.ac.in"],
    ["Tamiraparani ", " wardentambi@smail.iitm.ac.in"],
    ["Tapti	", " wardentapti@smail.iitm.ac.in"],
    ["Tunga ", " wardentunga@smail.iitm.ac.in"]
];

const offices = [
    ["Academic Courses - Office ", " dacoffice@iitm.ac.in"],
    ["Academic Research - Office ", " daroffice@iitm.ac.in"],
    ["CoursesDR ", " drcourses@smail.iitm.ac.in@iitm.ac.in"],
    ["Dean Students  ", " dost@iitm.ac.in"],
    ["Directordi ", " rector@iitm.ac.in"],
    ["Registrar ", " registrar@iitm.ac.in"],
    ["Dean (IC  ", " deanicsr@iitm.ac.in"],
    ["Dean Academic ", " deanac@iitm.ac.in"],
    ["Librarian ", " jadhavm@iitm.ac.in"],
    ["Placement ", " placement@iitm.ac.in"],
    ["Chairman - Computer Center ", " cchead@iitm.ac.in"],
    ["Chairman OHM ", " ccw@iitm.ac.in"],
    ["MiTR ", " mitr@iitm.ac.in"],
    ["CCW Office ", " ccwoffice@iitm.ac.in"],
    ["Office Security Section ", " secsec@iitm.ac.in"]
]
    

const acads = [
    ["Deputy Librarian ", " am@iitm.ac.in"],
    ["CCE Office (CEP/STC/QIP/CDC) ", " cceoffice@iitm.ac.in"],
    ["Central Workshop Office ", " ws@iitm.ac.in"],
    ["Chairman - Computer Center ", " cchead@iitm.ac.in"],
    ["Computer Center Office ", " ccoffice@iitm.ac.in"],
    ["CCE Chairman ", " chaircce@iitm.ac.in"],
    ["Librarian ", " jadhavm@iitm.ac.in"],
    ["Asst Librarian ", " sarolib@iitm.ac.in"],
    ["Web Studio Enquiry / NPTEL ", " nptl@iitm.ac.in"]
]

const foods = [
    ["Mess(MMCC) ", " head_mmcc@smail.iitm.ac.in"],
    ["Facilities (CMGFS) ", " head_cmgfs@smail.iitm.ac.in"]
]

const students = [
    ["Advisor, Placement ", " adtp@iitm.ac.in"],
    ["Internship FAX ", " internship@iitm.ac.in"],
    ["Advisor, Internship ", " adi@iitm.ac.in"],
    ["Placement Logistics ", " placement.logistics@iitm.ac.in"],
    ["Placement Office ", " placement@iitm.ac.in"],
    ["Student Body ", " students@smail.iitm.ac.in"]
]

const others = [
    ["Center for Social and Innovation Entrepreneurship ", " csie@wmail.iitm.ac.in"],
    ["Dean Secretary ", " deaniaroffice@iitm.ac.in"],
    ["Chief Security Officer ", " nelumalai@iitm.ac.in"],
    ["Front Office Help Desk Alumni Affairs ", " oaa1@iitm.ac.in"],
    ["Office of International Relations ", " oir@iitm.ac.in"],
    ["Office Security Section ", " secsec@iitm.ac.in"],
    ["Officer In-charge (for both Guest Houses) ", " o-i-c@iitm.ac.in"],
    ["securitystaff ", " scariyakc@iitm.ac.in"]
]

const Compose = () => {
    var opt_dept = true;
    var opt_hostel = true;
    var opt_office = true;
    var opt_acads = true;
    var opt_foo = true;
    var opt_stud = true;
    var opt_oth = true;




    function contact_dropdown() {
        var x:any = document.getElementById("contact_dropdown");
        if (x!.style.display === "none") {
            x!.style.display = "block";
        } else {
            x!.style.display = "none";
        }
        }
        // department
        function department() {
            if(opt_dept){
                for (let i = 0; i < departments.length; i++){
                    let new_option = new Option(departments[i][0] + ':' + departments[i][1], departments[i][1]);
                    
                    const select:any = document.querySelector('#dept');
                    select!.add(new_option, undefined);
                }
                opt_dept=false;
            }
            
            
            var y:any = document.getElementById("contact_dropdown");
            var x:any = document.getElementById("depart");

            var a:any = document.getElementById("host");
            var b:any = document.getElementById("off");
            var c:any = document.getElementById("acad");
            var d:any = document.getElementById("foo");
            var e:any = document.getElementById("stud");
            var f:any = document.getElementById("oth");



            a!.style.display = "none";
            b!.style.display = "none";
            c!.style.display = "none";
            d!.style.display = "none";
            e!.style.display = "none";
            f!.style.display = "none";






        if (x!.style.display === "none") {
            x!.style.display = "block";
            
        } else {
            x!.style.display = "none";
        }
        }

        function to_id_department(){
            var x:any = document.getElementById("to_email");
            var y:any = document.getElementById("dept");
            var z:any = document.getElementById("depart");
            var w:any = document.getElementById("contact_dropdown");
          

            var email = y!.value;
            if(email != "" && email != x!.value){
                x!.value = email;
                z!.style.display = "none";
                w!.style.display = "none";


            }
        }

        // hostel

        function hostel() {
            if(opt_hostel){
                for (let i = 0; i < hostels.length; i++){
                    let new_option = new Option(hostels[i][0] + ':' + hostels[i][1], hostels[i][1]);
                    const select:any = document.querySelector('#hostel_select');
                    select!.add(new_option, undefined);
                }
                opt_hostel = false;
            }
            
            
            var a:any = document.getElementById("depart");
            var b:any = document.getElementById("off")
            var c:any = document.getElementById("acad");
            var d:any = document.getElementById("foo");
            var e:any = document.getElementById("stud");
            var f:any = document.getElementById("oth");

            a!.style.display = "none";
            b!.style.display = "none";
            c!.style.display = "none";
            d!.style.display = "none";
            e!.style.display = "none";
            f!.style.display = "none";





            
            var y:any = document.getElementById("contact_dropdown");
            var x:any = document.getElementById("host");
        if (x!.style.display === "none") {
            x!.style.display = "block";
        } else {
            x!.style.display = "none";
        }
        }

        function to_id_hostel(){
            var x:any = document.getElementById("to_email");
            var y:any = document.getElementById("hostel_select");

            var email = y!.value;

            var z:any = document.getElementById("host");
            var w:any = document.getElementById("contact_dropdown");


            var email = y!.value;
            if(email != "" && email != x!.value){
                x!.value = email;
                z!.style.display = "none";
                w!.style.display = "none";
               
            }
        }

        // office

        function office() {
            if(opt_office){
                for (let i = 0; i < offices.length; i++){
                    let new_option = new Option(offices[i][0] + ':' + offices[i][1], offices[i][1]);
                    const select:any = document.querySelector('#office_select');
                    select!.add(new_option, undefined);
                }
                opt_office = false;
            }
            
            
            var a:any = document.getElementById("depart");
            var b:any = document.getElementById("host");
            var c:any = document.getElementById("acad");
            var d:any = document.getElementById("foo");
            var e:any = document.getElementById("stud");
            var f:any = document.getElementById("oth");

            a!.style.display = "none";
            b!.style.display = "none";
            c!.style.display = "none";
            d!.style.display = "none";
            e!.style.display = "none";
            f!.style.display = "none";
            
            var x:any = document.getElementById("off");
        if (x!.style.display === "none") {
            x!.style.display = "block";
        } else {
            x!.style.display = "none";
        }
        }

        function to_id_office(){
            var x:any = document.getElementById("to_email");
            var y:any = document.getElementById("office_select");

            var email = y!.value;

            var z:any = document.getElementById("off");
            var w:any = document.getElementById("contact_dropdown");


            var email = y!.value;
            if(email != "" && email != x!.value){
                x!.value = email;
                z.style.display = "none";
                w.style.display = "none";
               
            }
        }

        // academics 

        function academics() {
            if(opt_acads){
                for (let i = 0; i < acads.length; i++){
                    let new_option = new Option(acads[i][0] + ':' + acads[i][1], acads[i][1]);
                    const select:any = document.querySelector('#academic_select');
                    select!.add(new_option, undefined);
                }
                opt_acads = false;
            }
            
            
            var a:any = document.getElementById("depart");
            var b:any = document.getElementById("host");
            var c:any = document.getElementById("off");
            var d:any = document.getElementById("foo");
            var e:any = document.getElementById("stud");
            var f:any = document.getElementById("oth");

            a!.style.display = "none";
            b!.style.display = "none";
            c!.style.display = "none";
            d!.style.display = "none";
            e!.style.display = "none";
            f!.style.display = "none";




            
            var x:any = document.getElementById("acad");
        if (x!.style.display === "none") {
            x!.style.display = "block";
        } else {
            x!.style.display = "none";
        }
        }

        function to_id_academics(){
            var x:any = document.getElementById("to_email");
            var y:any = document.getElementById("academic_select");

            var email = y!.value;

            var z:any = document.getElementById("acad");
            var w:any = document.getElementById("contact_dropdown");


            var email = y!.value;
            if(email != "" && email != x!.value){
                x!.value = email;
                z!.style.display = "none";
                w!.style.display = "none";
               
            }
        }

        //food
        function food() {
            if(opt_foo){
                for (let i = 0; i < foods.length; i++){
                    let new_option = new Option(foods[i][0] + ':' + foods[i][1], foods[i][1]);
                    const select:any = document.querySelector('#food_select');
                    select!.add(new_option, undefined);
                }
                opt_foo = false;
            }
            
            
            var a:any = document.getElementById("depart");
            var b:any = document.getElementById("host");
            var c:any = document.getElementById("off");
            var d:any = document.getElementById("acad");
            var e:any = document.getElementById("stud");
            var f:any = document.getElementById("oth");

            a!.style.display = "none";
            b!.style.display = "none";
            c!.style.display = "none";
            d!.style.display = "none";
            e!.style.display = "none";
            f!.style.display = "none";




            
            var x:any = document.getElementById("foo");
        if (x!.style.display === "none") {
            x!.style.display = "block";
        } else {
            x!.style.display = "none";
        }
        }

        function to_id_food(){
            var x:any = document.getElementById("to_email");
            var y:any = document.getElementById("food_select");

            var email = y!.value;

            var z:any = document.getElementById("foo");
            var w:any = document.getElementById("contact_dropdown");


            var email = y!.value;
            if(email != "" && email != x!.value){
                x!.value = email;
                z!.style.display = "none";
                w!.style.display = "none";
               
            }
        }

        //students
        function student() {
            if(opt_stud){
                for (let i = 0; i < students.length; i++){
                    let new_option = new Option(students[i][0] + ':' + students[i][1], students[i][1]);
                    const select:any = document.querySelector('#student_select');
                    select!.add(new_option, undefined);
                }
                opt_foo = false;
            }
            
            
            var a:any = document.getElementById("depart");
            var b:any = document.getElementById("host");
            var c:any = document.getElementById("off");
            var d:any = document.getElementById("acad");
            var e:any = document.getElementById("foo");
            var f:any = document.getElementById("oth");

            a.style.display = "none";
            b.style.display = "none";
            c.style.display = "none";
            d.style.display = "none";
            e.style.display = "none";
            f.style.display = "none";
  
            var x:any = document.getElementById("stud");
        if (x!.style.display === "none") {
            x!.style.display = "block";
        } else {
            x!.style.display = "none";
        }
        }

        function to_id_student(){
            var x:any = document.getElementById("to_email");
            var y:any = document.getElementById("student_select");

            var email = y!.value;

            var z:any = document.getElementById("stud");
            var w:any = document.getElementById("contact_dropdown");


            var email = y!.value;
            if(email != "" && email != x!.value){
                x!.value = email;
                z!.style.display = "none";
                w!.style.display = "none";
               
            }
        }

         //others
         function other() {
            if(opt_oth){
                for (let i = 0; i < others.length; i++){
                    let new_option = new Option(others[i][0] + ':' + others[i][1], others[i][1]);
                    const select:any = document.querySelector('#other_select');
                    select!.add(new_option, undefined);
                }
                opt_oth = false;
            }
            
            
            var a:any = document.getElementById("depart");
            var b:any = document.getElementById("host");
            var c:any = document.getElementById("off");
            var d:any = document.getElementById("acad");
            var e:any = document.getElementById("foo");
            var f:any = document.getElementById("stud");

            a!.style.display = "none";
            b!.style.display = "none";
            c!.style.display = "none";
            d!.style.display = "none";
            e!.style.display = "none";
            f!.style.display = "none";

            var x:any = document.getElementById("oth");
        if (x!.style.display === "none") {
            x!.style.display = "block";
        } else {
            x!.style.display = "none";
        }
        }

        function to_id_other(){
            var x:any = document.getElementById("to_email");
            var y:any = document.getElementById("other_select");

            var email = y!.value;

            var z:any = document.getElementById("oth");
            var w:any = document.getElementById("contact_dropdown");


            var email = y!.value;
            if(email != "" && email != x!.value){
                x!.value = email;
                z!.style.display = "none";
                w!.style.display = "none";
               
            }
        }
        

        

        

        function close_modal(){
            var x:any = document.getElementById("compose_box");
            x!.style.display = "none";
        }

        function minimize(){
            var x:any = document.getElementById("hidden");
            var y:any = document.getElementById("compose_box");
            if( x!.style.display == "none"){
                x!.style.display = "block";
                y!.style.height = '650px';
                y!.style.top = '300px';
                
            }
            else{
                x!.style.display = "none";
                y!.style.height = '20px';
                y!.style.top = '920px';
            }
        }
        // function select_menu(){
        //     for (let i = 0; i < departments.length; i++){
        //         let new_option = new Option(departments[i][0] + ':' + departments[i][1], departments[i][1]);
        //         const select:any = document.querySelector('#dept');
        //         select.add(new_option, undefined);
        //     }
        // }

    return(
        
        <div id = "compose_box" className = "modal" style = {{display : "block"}}>
            <div className = "new_message">
                <a>
                    New Message
                </a>
                
                <a className="end">
                    <button className="new" onClick={minimize}>--</button>
                </a>
                
                <a>
                    <button className="new" onClick = {close_modal}>x</button>
                    
                </a>
            </div>
            <div id = "hidden" style = {{display: "block"}}> 
                <div className = "to">
                    <a>
                        To
                    </a>
                    <input className ="to_input" type = "text" id = "to_email"/>
                    <div className="contactbook">
                        <button className ="contacts" onClick = {contact_dropdown} >
                            <img src={contact}/>
                        </button>
                        <div id="contact_dropdown" className = "contact-categories" style={{display: "none"}}>
                            {/* department */}
                            <button className ="category" onClick={department}>Head of Department</button>
                            <div className = "department" id="depart" style={{display: "none"}}>
                                <select className = "select" id="dept" onClick={to_id_department}>
                                    <option value = "" > -- select an option -- </option>
                                </select>
                            </div>
                            
                            {/* hostel */}
                            <button className = "category" onClick = {hostel} >Hostel Complaint</button>
                            <div className ="hostel" id ="host" style = {{display: "none"}}>
                                <select className = "name" id = "hostel_select" onClick = {to_id_hostel}>
                                <option value = ""  > -- select an option -- </option>
                                </select>
                            </div>
                             {/*office  */}
                            <button className = "category" onClick = {office} >Admin and Office</button>
                            <div className ="office" id ="off" style = {{display: "none"}}>
                                <select className = "name" id = "office_select" onClick = {to_id_office}>
                                <option value = ""  > -- select an option -- </option>
                                </select>
                            </div>

                            {/*acadamecis  */}
                            <button className = "category" onClick = {academics} >Academics Facility</button>
                            <div className ="academics" id ="acad" style = {{display: "none"}}>
                                <select className = "name" id = "academic_select" onClick = {to_id_academics}>
                                <option value = ""  > -- select an option -- </option>
                                </select>
                            </div>

                            {/*food */}
                            <button className = "category" onClick = {food} >Food</button>
                            <div className ="food" id ="foo" style = {{display: "none"}}>
                                <select className = "name" id = "food_select" onClick = {to_id_food}>
                                <option value = ""  > -- select an option -- </option>
                                </select>
                            </div>

                            {/*students */}
                            <button className = "category" onClick = {student} >Student Facility</button>
                            <div className ="student" id ="stud" style = {{display: "none"}}>
                                <select className = "name" id = "student_select" onClick = {to_id_student}>
                                <option value = ""  > -- select an option -- </option>
                                </select>
                            </div>

                            {/*others*/}
                            <button className = "category" onClick = {other} >Others</button>
                            <div className ="other" id ="oth" style = {{display: "none"}}>
                                <select className = "name" id = "other_select" onClick = {to_id_other}>
                                <option value = ""  > -- select an option -- </option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                    <div className = "to">
                        <a>
                            Cc
                        </a>
                        <input className ="to_input" type = "text"/>
                    </div>
                    <div className = "to">
                        <a>
                            Bcc
                        </a>
                        <input className ="to_input" type = "text"/>

                    </div>

                    <div className = "subject">
                        <a>
                            Subject
                        </a>
                        <input className ="to_input" type = "text"/>
                    </div>

                    <div>
                        <textarea className = "input"></textarea>
                    </div>
                    
                    <div className="options">
                        <div className = "send">
                                <button className = "button_send"><span className="send_text">Send</span></button>
                        </div>
                        <div>
                            <button className = "attach"><img src={attach}/></button>
                        </div>
                    
                    </div> 
                </div>
            </div>
            
    
    )
}

export default Compose;