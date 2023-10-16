        
        //Save Form Text Field ID
        const savebtn = document.querySelector("#customersavebtn");
        const cusnam = document.querySelector("#cusName");
        const customerid = document.querySelector("#cusId");
        const address = document.querySelector("#cusAddress");
        const Salary = document.querySelector("#cusSalary");

        const customerarr = new Array();
        const table = document.querySelector("#cusdatatable");
        const viewallbtn  =  document.querySelector("#viewallbtn");

        const modal = new bootstrap.Modal(document.querySelector("#cusstaticBackdrop"), {});

        let checkcustomertextfieldAR = [false,false,false,false];

        //This Function For Add New Button
        $('#addnewbtn').click(function(){
          customerid.disabled = false;
          clearcustomerTextfield();
          alltxtFielddisable();
        });

        //This Function For When Click The Save Button Save All Customer Details
        savebtn.addEventListener("click",function(){
          console.log(checkcustomertextfieldAR)
          if(checkcusID($('#cusId').val())){
            alert("OOPS , Alredy Exicts this Customer ID , Please enter any Customer ID !");
          }else{
            console.log(customerFieldArrcheck());
            if(customerFieldArrcheck()!==false){
              let newCustomer = Object.assign({},Customer);

              newCustomer.cusid = customerid.value;
              newCustomer.name = cusnam.value;
              newCustomer.cusnomber = address.value;
              newCustomer.cussalry = Salary.value;

              //Data Save
              customerAr.push(newCustomer);
              //Data Add For Table
              $('#cusdatatable td').parent().remove();
              getAllData();
              console.log(customerAr);
            }else{
              alert('Please Enter Valid Value & Try Again !');
            }
          }
        });

        //This Function For View All Customer
        viewallbtn.addEventListener("click",function(){
          $('#cusdatatable td').parent().remove();
          getAllData();
        });

        //This Function For Delete Button Action
        $('#deletebtn').click(function(){
          let id = $('#cusinputfield').val();
          console.log(id);
          deleteCustomer(id);
          $('#cusinputfield').val('');
        });

        //This Function For Update Customer Button Action
        $('#customerupdatebtn').click(function(){
          updateCustomer(customerid.value);
        });

        $('#cusId').keyup(function(){
          if(testValid(/^C00-\d{3,}$/,$('#cusId').val(),'#cusId',cusnam)){
            checkcustomertextfieldAR[0] = 'true';
          }else{
            checkcustomertextfieldAR[0] = 'false';
          }
          console.log("cusID");
        });

        $('#cusName').keyup(function(){
          if(testValid(/^[A-Za-z ]{5,}$/,$('#cusName').val(),'#cusName',address)){
            checkcustomertextfieldAR[1] = 'true';
          }else{
            checkcustomertextfieldAR[1] = 'false';
          }
        });

        $('#cusAddress').keyup(function(){
          if(testValid(/^0\d{9}$/,$('#cusAddress').val(),'#cusAddress',Salary)){
            checkcustomertextfieldAR[2] = 'true';
          }else{
            checkcustomertextfieldAR[2] = 'false';
          }
        });

        $('#cusSalary').keyup(function(){
          if(testValid(/^[0-9]{2,}([.][0-9]{2})?$/,$('#cusSalary').val(),'#cusSalary','')){
            checkcustomertextfieldAR[3] = 'true';
          }else{
            checkcustomertextfieldAR[3] = 'false';
          }
        });

        //This Function For When Click Some Row Show The Update Form With They Row Value
        function showSaveForm(){
          modal.show();
        }

        //This Function For Set Click Action For Table Row, When Click They Row Get The Data From they Row And Set Data To The Save Form Field 
        function setClickeventForTable(){
          $('#cusdatatable tr').click(function () {
            
            let id = $(this).children().eq(0).text();
            let name = $(this).children().eq(1).text();
            let addres = $(this).children().eq(2).text();
            let salary = $(this).children().eq(3).text();
    
            console.log(address,salary);
            customerid.value = id;
            cusnam.value = name;
            address.value = addres;
            Salary.value = salary;
            
            customerid.disabled = true;

            showSaveForm();
          });
        }

        //This Function For Get All Data From Array
        function getAllData(){
          for(i in customerAr){
            console.log(customerAr[i]);
            let custId = customerAr[i].cusid;
            let custnam = customerAr[i].name;
            let custnom = customerAr[i].cusnomber;
            let custsal = customerAr[i].cussalry;

            datarow(custId,custnam,custnom,custsal);
          }
        }

        //This Function For All Data Add Add To The Table
        function datarow(id,nam,nomb,sal){

          let row = `<tr>
                      <td>${id}</td>
                      <td>${nam}</td>
                      <td>${nomb}</td>
                      <td>${sal}</td>
                    </tr>`;

          $("#cusdatatable").append(row);
          setClickeventForTable();
        }

        //This Function For Delete Customer From Array
        function deleteCustomer(ID){
          let newArray = [];

          if(checkID(ID)){
            for(i in customerAr){
              if(ID===customerAr[i].cusid){
              }else{
                newArray.push(customerAr[i]);
              }
            }
            customerAr = newArray;
            alert("Successfully Customer Deleted");
            console.log(customerAr);
          }else{
            alert("Something Wrong, Please check & enter correct ID !");
          }
        }

        //This Function For Check the Input ID Alredy Exicts OR Not
        function checkID(ID){
          for(i in customerAr){
            if(ID===customerAr[i].cusid){
              return true;
            }else{
              return false;
            }
          }
        }

        //This Function For Update Customer When Click the Update Button
        function updateCustomer(ID){
          br:for(i in customerAr){
            if(ID===customerAr[i].cusid){
              customerAr[i].cusid = customerid.value;
              customerAr[i].name = cusnam.value;
              customerAr[i].cusnomber = address.value;
              customerAr[i].cussalry = Salary.value;

              break br;
            }
            console.log(customerAr);
          }
          $('#cusdatatable td').parent().remove();
          getAllData();
        }

        //This Function For When Click The Add new Customer Button , Clear All TextField
        function clearcustomerTextfield(){
          $('#cusId').val('');
          $('#cusName').val('');
          $('#cusAddress').val('');
          $('#cusSalary').val('');
        }

        //This Function For Before Save Some Data Check They Customer ID Alredy Exicts Or Not
        function checkcusID(ID){
          for(i in customerAr){
            if(ID===customerAr[i].cusid){
              return true;
            }
          }
        }

        function testValid(pattern,data,Field,nextField){
          var regexPattern = pattern;
      
          if(regexPattern.test(data)){
            $(Field).css('border', '1px solid gray');
            if(nextField!==''){
              nextField.disabled = false;
              nextField.style.border = '2px solid red';
            }
            return true;
          }else{
            $(Field).css('border', '2px solid red');
            return false;
          }
        }

        function alltxtFielddisable(){
          $('#cusId').css('border', '2px solid red');
          cusnam.disabled = true;
          address.disabled = true;
          Salary.disabled = true;
        }

        function customerFieldArrcheck(){
          if(checkcustomertextfieldAR.length===4){
            for(i in checkcustomertextfieldAR){
              if(checkcustomertextfieldAR[i]==='true'){
              }else{
                return false;
              }
            }
          }else{
            return false;
          }
        }
