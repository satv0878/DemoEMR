
<template>
<v-app>
<v-content>

 <v-img>

<v-toolbar color="#191919" >
<div> 
   <span class="fas fa-list-old-style" style="color:#ED252A"></span>
</div>
 <v-divider class="ma-2" vertical inset></v-divider>
  <div>
    <span class="white--text" style=" font-size:large">EMR</span>
  </div>
  <v-spacer class="ma-2"></v-spacer>
  <div>
    <span class="white--text" >User: </span>
    <span class="white--text" style=" font-size:large" > {{this.tableData[0].UserId}}</span>
    <v-divider class="ma-2" vertical inset></v-divider>
   <font-awesome-icon :icon="['far', 'user-circle']"   size="2x"  style="color:#323232"/>
  </div>

</v-toolbar>

  <v-container grid-list-md text-xs-center>

    <v-layout  row wrap>

     
  <v-flex lg6 pa-2>
     <v-card
      class="mx-auto" :flat = true>
     <v-layout column >
       <v-flex>
        <v-card-title Patient>
            <div class="text-xs-left"  style="font-weight:bold" >Patient</div>
            <div class="text-xs-left" >- identification</div>
         </v-card-title>
         </v-flex>

          <v-divider class="ma-3"></v-divider>

        <v-flex>
          <div class="text-xs-right" >
            <h1 v-if="tableData[1]">{{this.tableData[0].PatientId}}</h1>
          </div>
           </v-flex>
         </v-layout>
      </v-card>
   </v-flex>


     <v-flex lg6 pa-2>
     <v-card
      class="mx-auto" :flat = true>
     <v-layout column >
       <v-flex>
        <v-card-title Device>
            <div class="text-xs-left"  style=" font-weight:bold" >Device</div>
            <div class="text-xs-left" >- name</div>
         </v-card-title>
         </v-flex>

          <v-divider class="ma-3"></v-divider>

        <v-flex>
          <div class="text-xs-right" >
              <h1 v-if="tableData[1]">{{this.tableData[0].MeasurementDevice.DeviceName}}{{this.tableData[0].MeasurementDevice.DeviceSerialnumber}}</h1>
          </div>
           </v-flex>
         </v-layout>
      </v-card>
   </v-flex>

  <v-flex md6 pa-2>
   <v-card
      class="mx-auto" :flat = true>
     <v-layout column>
       <v-flex >
        <v-card-title Weight>
            <div class="text-xs-left"  style=" font-weight:bold" >Weight - </div>
                <div v-if="tableData[1]" class="text-xs-right">
            <span v-if="tableData[0].MeasurementType == 'Weight'">{{this.tableData[0].MeasurementUnit}}</span>
            <span v-else-if="tableData[1].MeasurementType == 'Weight'">{{this.tableData[1].MeasurementUnit}}</span>
          </div>
            </v-card-title>
        </v-flex>

        
          <v-divider class="ma-3"></v-divider>


      <v-flex v-if="tableData[1]" xs6 pr-4>
          <div v-if="tableData[1]" class="text-xs-right">
            <h1 v-if="tableData[0].MeasurementType == 'Weight'">{{this.tableData[0].MeasurementValue}} {{this.tableData[0].MeasurementUnit}}</h1>
            <h1 v-else-if="tableData[1].MeasurementType == 'Weight'">{{this.tableData[1].MeasurementValue}} {{this.tableData[1].MeasurementUnit}}</h1>
            <h1 v-else>-</h1>
          </div>

      </v-flex>
        </v-layout>
      </v-card>

   </v-flex>
     <v-flex md6 pa-2>
   <v-card
      class="mx-auto" :flat = true>
     <v-layout column>
       <v-flex xs2>
        <v-card-title Weight>
                 <div class="text-xs-left"  style=" font-weight:bold" >Height - </div>
     
            <div v-if="tableData[1]" class="text-xs-right">
            <span v-if="tableData[0].MeasurementType == 'Height'">{{this.tableData[0].MeasurementUnit}}</span>
            <span v-else-if="tableData[1].MeasurementType == 'Height'">{{this.tableData[1].MeasurementUnit}}</span>

          </div>
            </v-card-title>
        </v-flex>
        
          <v-divider class="ma-3"></v-divider>
        <v-flex >

      </v-flex>
        <v-flex xs6 pr-4>
          <div v-if="tableData[1]" class="text-xs-right">
            <h1 v-if="tableData[0].MeasurementType == 'Height'">{{this.tableData[0].MeasurementValue}} {{this.tableData[0].MeasurementUnit}}</h1>
            <h1 v-else-if="tableData[1].MeasurementType == 'Height'">{{this.tableData[1].MeasurementValue}} {{this.tableData[1].MeasurementUnit}}</h1>
            <h1 v-else>-</h1>
          </div>

        </v-flex>
        </v-layout>
      </v-card>
   </v-flex>
   


  <v-flex xs12 pa-2 mt-3>
      <!--v-data-table
          :items="tableData"
          :headers="headers"
      
          :flat = true
          
          -->
    <!--template slot="items" slot-scope="props" :style="{backgroundColor: (props.item.PatientId  = 12345679654 ? 'red' : 'transparent' ) }">
      <td class="text-xs-left">{{ props.item.PatientId }}</td>
      <td class="text-xs-left">{{ props.item.UserId }}</td>
      <td class="text-xs-left">{{ props.item.MeasurementType }}</td>
      <td class="text-xs-left">{{ props.item.MeasurementValue }}</td>
      <td class="text-xs-left">{{ props.item.MeasurementUnit }}</td>
      <td class="text-xs-left">{{ props.item.MeasurementTime }}</td>
    </template-->

<template>
  <div>

  <b-container fluid>
    <b-table   :items="tableData" :fields="headers" :tbody-tr-class="rowClass"  @filtered="onFiltered" :filter="filter" :current-page="currentPage"  :per-page="perPage" ></b-table>
    <!-- User Interface controls -->
    <b-row>
      <b-col md="6" class="my-1">
        <b-form-group label-cols-sm="3" label="Per page" class="mb-0">
          <b-form-select v-model="perPage" :options="pageOptions"></b-form-select>
        </b-form-group>
      </b-col>
      <b-col md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>


    </b-container>
  </div>
</template>


   </v-flex>
    </v-layout>

  </v-container>


</v-img>

<v-snackbar
      v-model="snackbar"
      :vertical = true
      :color = "colorSnackbar" 
      :top= true
      :timeout= 6000

    >
    <div h3 class="headline pr-5 pl-5 mr-5 ml-5 pt-3"  v-if="tableData[1]">
     {{this.tableData[0].PatientId}}
     </div>
      <v-btn
        color="black"
        flat
        @click="snackbar = false"
      >
      </v-btn>
    </v-snackbar>




</v-content>


<div class="text-xs-center">
      <v-bottom-sheet inset>

        <v-btn round slot="activator"  color="black" dark>Barcodes</v-btn>
        <v-card >
          <v-list three-line >
            <v-list-tile>

              <v-list-tile-action>
          <v-text-field
          v-model="uidBarcode"
            label="User ID"

          ></v-text-field>
                </v-list-tile-action>
                <barcode v-bind:value="uidBarcode" :options="{ displayValue: false ,height: '40' , width:'1', format: 'CODE128' } "></barcode>
            </v-list-tile>
              <v-list-tile>
              <v-list-tile-action>
          <v-text-field
           v-model="pidBarcode"
            label="Patient ID"
          ></v-text-field>
                </v-list-tile-action>
                <barcode v-model="pidBarcode" :options="{ displayValue: false , height: '40', width:'1', format: 'CODE128' }"></barcode>
            </v-list-tile>
          </v-list>
        </v-card>
      </v-bottom-sheet>



      </div>
</v-app>

</template>

<script>

export default {





    data() {
        return {
 totalRows: 1,
  filter: null,
          currentPage: 1,
        perPage: 5,
        pageOptions: [5, 10, 15],
        
snackbar: false,
sheet: false,
colorSnackbar: 'success',

          headers: [
            { key: 'PatientId', 
              sortable: false, 
              label: 'Patient'
            },
            
            { key: 'MeasurementType', 
              sortable: false, 
              label: 'Type', 
              align: "right"
            },

            { key: 'MeasurementValue', 
              sortable: false, 
              label: 'Value'
            },

            { key: 'MeasurementUnit', 
              sortable: false, 
              label: 'Unit'
            },

            { key: 'MeasurementTime', 
              sortable: false, 
              label: 'Time'

            },

            { key: 'UserId', 
              sortable: false, 
              label: 'User ID'
              
            }
], 
          //[
          //{ text: 'Patient ID',align: 'left',sortable: false,value: 'PatientId'},
          //{ text: 'User ID', value: 'UserId', sortable: false, align: 'left' },
          //{ text: 'Type', value: 'MeasurementType', sortable: false, align: 'left', selected: 'true' },
          //{ text: 'Value', value: 'MeasurementValue', sortable: false, align: 'left' },
          //{ text: 'Unit', value: 'MeasurementUnit', sortable: false, align: 'left' },
          //{ text: 'Time', value: 'MeasurementTime', sortable: false, align: 'left' },
          //],
            tableData: [
    {
        "MeasurementId": "",
        "MeasurementType": "",
        "MeasurementValue": "",
        "MeasurementUnit": "",
        "MeasurementPrecision": "",
        "MeasurementTime": "",
        "UserId": "",
        "PatientId": "",
        "HL7Message": "",
        "MeasurementDevice": {
            "DeviceId": "",
            "DeviceModel": "",
            "DeviceName": "",
            "DeviceSerialnumber": "",
            "DeviceHardwareID": ""
        }
    }
            ],
            PatientId: '',
            height:'-' ,
            weight: '-',
            heightunit:'' ,
            weightunit: '',
            serialnumber: '',
            patientid: '',
            userid:'',
            device:'',
            source:'',
            pidBarcode:'123456789 Peter Paulus',
            uidBarcode:'U2345 Rosi Hurtig',


        }
    },


    mounted: function()
    {

        this.totalRows = this.tableData.length
        //this.fetchEventsList();
        //this.timer = setInterval(this.fetchEventsList, 1000)

    },

          created:function(){
   console.log(this.dataFromServer)
var self= this
  
var hl7 = require('simple-hl7');

///////////////////SERVER/////////////////////
var app = hl7.tcp();

var test=app.use(function( req, res, next ) {
  //req.msg is the HL7 message
  self.snackbar = true
  var parser = new hl7.Parser();

var pid = req.msg.getSegment('PID');
var pv1 = req.msg.getSegment('PV1');
var obx = req.msg.getSegment('OBX');


  console.log(pid)

  console.log('******message received*****')
  console.log(pid.getComponent(5, 2) + ' ' + pid.getComponent(5, 1));



req.msg.getSegments("OBX").forEach(function(segment) {

  var value = segment.fields[4].value[0][0];
  var user = segment.fields[15].value[0][0];
  var type = segment.fields[2].value[0][0];
  var unit = segment.fields[5].value[0][0];
  var time = segment.fields[13].value[0][0];
  var deviceName = segment.fields[17].value[0][0];
  //var serialnumber = segment.fields[17][4].value[0][0];


if(value != '')
  {


self.tableData.unshift(
   {
        "MeasurementId": "",
        "MeasurementType": type,
        "MeasurementValue": value,
        "MeasurementUnit": unit,
        "MeasurementPrecision": "",
        "MeasurementTime":time,
        "UserId": user ,
        "PatientId":pv1.getComponent(19, 1),
        "HL7Message": req.msg,
        "MeasurementDevice": {
            "DeviceId": "",
            "DeviceModel": "",
            "DeviceName": deviceName,
            "DeviceSerialnumber": "",
            "DeviceHardwareID": ""
        }
    }

  )
  }



})





  next();
  
})




app.use(function(req, res, next){
  //res.ack is the ACK
  //acks are created automatically

  //send the res.ack back
  console.log('******sending ack*****')
  res.end()
})

app.use(function(err, req, res, next) {
  //error handler
  //standard error middleware would be
  console.log('******ERROR*****')
  console.log(err);
  var msa = res.ack.getSegment('MSA');
  msa.editField(1, 'AR');
  res.ack.addSegment('ERR', err.message);
  res.end();
});

//Listen on port 7777
app.start(9007);
///////////////////SERVER/////////////////////

}
,
methods:{

      rowClass() {
      //return 'table-success'
      }, 

      onFiltered(filteredItems) {
        // Trigger pagination to update the number of buttons/pages due to filtering
        this.totalRows = filteredItems.length
        this.currentPage = 1
      }

}

}
</script>

<style>

::-webkit-scrollbar {
width: 0em;
background: transparent;
display: inline !important;
}

table.v-table thead tr th {
  font-size: 20px;
  color: black;

}
table.v-table tbody tr td {
  font-size: 18px;
  color: black;
}

.mytable .v-table tbody tr:hover {
  background: black;
}

.mytable .v-table tbody tr:not(:last-child) {
    border-bottom: none;
}


</style>
