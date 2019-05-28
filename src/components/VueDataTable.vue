
<template>
<v-app>
<v-content>

 <v-img>



<v-toolbar color="black darken-4" >
<div>
    <span><span class="fas fa-list-old-style" style="color:#ED252A"></span>
</span>
  </div>
   <v-spacer></v-spacer>
  <div class="text-xs-right">
    <span class="white--text"  style=" font-size:large;">Demo EMR 1.1</span>
  </div>

</v-toolbar>

  <v-container grid-list-md text-xs-center>

    <v-layout  row wrap>
     <v-flex xs12 pa-2>
   <v-card
      class="mx-auto">
     <v-layout row align-center>
       <v-flex xs1>
        <v-card-title User>
          <font-awesome-icon  size="3x" icon="user-circle" style="color:LightGray"/>
         </v-card-title>
        </v-flex>
        <v-flex xs1>
          <v-card-text>
            <div class="headline" >
           User
           </div>
          </v-card-text>
           </v-flex>
            <v-flex xs9 pa-3>
          <div class="text-xs-right" >
            <h1 v-if="tableData[1]">{{this.tableData[0].UserId}}</h1>
          </div>
           </v-flex>
         </v-layout>
      </v-card>
   </v-flex>


  <v-flex xs12 pa-2 mb-3>
     <v-card
      class="mx-auto">
     <v-layout row >
       <v-flex  xs1>
        <v-card-title Patient>
          <font-awesome-icon  size="3x" icon="user-circle" style="color:LightGray" />
         </v-card-title>
         </v-flex>
        <v-flex xs1>
          <v-card-text>
            <div class="headline" >
           Patient
           </div>
          </v-card-text>

           </v-flex>
          <v-flex  xs9 pa-3>
          <div class="text-xs-right" >
            <h1 v-if="tableData[1]"> {{this.tableData[0].PatientId}}</h1>
          </div>
           </v-flex>
         </v-layout>
      </v-card>
   </v-flex>


  <v-flex xs12 pa-2 >
   <v-card
      class="mx-auto">
     <v-layout row>
       <v-flex xs1 >
        <v-card-title Device>
         <font-awesome-icon  size="3x" icon="balance-scale" style="color:LightGray"/>
          </v-card-title>
        </v-flex>
        <v-flex  xs1>
          <v-card-text>
            <div class="headline" >
           Device
           </div>
          </v-card-text>
      </v-flex>
       <v-flex xs9 pa-1>
          <div class="text-xs-right" >
            <h1 v-if="tableData[1]">{{this.device}}</h1>
          </div>
            <div class="text-xs-right">
            <span>{{this.serialnumber}}</span>
          </div>
      </v-flex>
        </v-layout>
      </v-card>
   </v-flex>

  <v-flex xs6 pa-2>
   <v-card
      class="mx-auto">
     <v-layout row>
       <v-flex xs2>
        <v-card-title Weight>
          <font-awesome-icon  size="3x" icon="weight-hanging" style="color:LightGray"/>
            </v-card-title>
        </v-flex>
        <v-flex xs2 pa-2>
          <div>
            <h3 class="headline mb-0">Weight</h3>
          </div>
      </v-flex>
      <v-flex v-if="tableData[1]" xs6 pa-1>
          <div v-if="tableData[1]" class="text-xs-right">
            <h1 v-if="tableData[0].MeasurementType == 'Weight'">{{this.tableData[0].MeasurementValue}}</h1>
            <h1 v-else-if="tableData[1].MeasurementType == 'Weight'">{{this.tableData[1].MeasurementValue}}</h1>
            <h1 v-else>-</h1>
          </div>
          <div v-if="tableData[1]" class="text-xs-right">
            <span v-if="tableData[0].MeasurementType == 'Weight'">{{this.tableData[0].MeasurementUnit}}</span>
            <span v-else-if="tableData[1].MeasurementType == 'Weight'">{{this.tableData[1].MeasurementUnit}}</span>
          </div>
      </v-flex>
        </v-layout>
      </v-card>

   </v-flex>
     <v-flex xs6 pa-2>
   <v-card
      class="mx-auto">
     <v-layout row>
       <v-flex xs2>
        <v-card-title Weight>
          <font-awesome-icon  size="3x" icon="arrow-up" style="color:LightGray"/>
            </v-card-title>
        </v-flex>
        <v-flex xs2 pa-2>
          <div>
            <h3 class="headline mb-0">Height</h3>
            <span></span>
          </div>
      </v-flex>
        <v-flex xs6 pa-1>
          <div v-if="tableData[1]" class="text-xs-right">
            <h1 v-if="tableData[0].MeasurementType == 'Height'">{{this.tableData[0].MeasurementValue}}</h1>
            <h1 v-else-if="tableData[1].MeasurementType == 'Height'">{{this.tableData[1].MeasurementValue}}</h1>
            <h1 v-else>-</h1>
          </div>
          <div v-if="tableData[1]" class="text-xs-right">
            <span v-if="tableData[0].MeasurementType == 'Height'">{{this.tableData[0].MeasurementUnit}}</span>
            <span v-else-if="tableData[1].MeasurementType == 'Height'">{{this.tableData[1].MeasurementUnit}}</span>

          </div>

        </v-flex>
        </v-layout>
      </v-card>
   </v-flex>



  <v-flex xs12 pa-2 mt-3>
      <v-data-table
          :items="tableData"
          :headers="headers"
          class ="elevation-1">
    <template slot="items" slot-scope="props">
      <td class="text-xs-left">{{ props.item.PatientId }}</td>
      <td class="text-xs-left">{{ props.item.UserId }}</td>
      <td class="text-xs-left">{{ props.item.MeasurementType }}</td>
      <td class="text-xs-left">{{ props.item.MeasurementValue }}</td>
      <td class="text-xs-left">{{ props.item.MeasurementUnit }}</td>
      <td class="text-xs-left">{{ props.item.MeasurementTime }}</td>
    </template>
  </v-data-table>

   </v-flex>
    </v-layout>

  </v-container>


</v-img>








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
import _ from 'lodash';

export default {





    data() {
        return {
        

sheet: false,


          headers:
          [
          { text: 'Patient ID',align: 'left',sortable: false,value: 'PatientId'},
          { text: 'User ID', value: 'UserId', sortable: false, align: 'left' },
          { text: 'Type', value: 'MeasurementType', sortable: false, align: 'left', selected: 'true' },
          { text: 'Value', value: 'MeasurementValue', sortable: false, align: 'left' },
          { text: 'Unit', value: 'MeasurementUnit', sortable: false, align: 'left' },
          { text: 'Time', value: 'MeasurementTime', sortable: false, align: 'left' },
          ],
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
            "DeviceName": "",
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
app.start(7777);
///////////////////SERVER/////////////////////



          },


  methods:
  {

 

  

  

    fetchEventsList()
    {

        //var currentUrl = window.location.origin+'/emr/measurement'
      

        if(this.tableData[0].MeasurementTime && this.tableData[1].MeasurementTime)
        {

        if (this.tableData[0].MeasurementTime == this.tableData[1].MeasurementTime)
        {
          if (this.tableData[0].MeasurementType == 'Weight')
          {
              this.weight =  this.tableData[0].MeasurementValue;
              this.height = this.tableData[1].MeasurementValue;

              this.weightunit =  this.tableData[0].MeasurementUnit
              this.heightunit = this.tableData[1].MeasurementUnit;

              this.device = this.tableData[0].MeasurementDevice.DeviceName
              this.serialnumber = this.tableData[0].MeasurementDevice.DeviceSerialnumber
              this.patientid = this.tableData[0].PatientId
              this.userid = this.tableData[0].UserId

          }
          else if (this.tableData[1].MeasurementType == 'Weight')
          {
            this.weight =  this.tableData[1].MeasurementValue;
            this.height = this.tableData[0].MeasurementValue;
            this.weightunit =  this.tableData[1].MeasurementUnit
          this.heightunit = this.tableData[0].MeasurementUnit;

              this.device = this.tableData[0].MeasurementDevice.DeviceName
              this.serialnumber = this.tableData[0].MeasurementDevice.DeviceSerialnumber
              this.patientid = this.tableData[0].PatientId
              this.userid = this.tableData[0].UserId
          }
        }
        else if ((this.tableData[0].MeasurementTime !== this.tableData[1].MeasurementTime))
        {
        if (this.tableData[0].MeasurementTime)
        {
          if (this.tableData[0].MeasurementType == 'Weight')
          {
              this.weight =  this.tableData[0].MeasurementValue;
              this.height = "-"

              this.weightunit =  this.tableData[0].MeasurementUnit
              this.heightunit = "";

              this.device = this.tableData[0].MeasurementDevice.DeviceName
              this.serialnumber = this.tableData[0].MeasurementDevice.DeviceSerialnumber
              this.patientid = this.tableData[0].PatientId
              this.userid = this.tableData[0].UserId
          }
          else
          {
              this.height = this.tableData[0].MeasurementValue;
              this.weight = "-";

              this.heightunit = this.tableData[0].MeasurementUnit;
              this.weightunit =  "";

              this.device = this.tableData[0].MeasurementDevice.DeviceName
              this.serialnumber = this.tableData[0].MeasurementDevice.DeviceSerialnumber
              this.patientid = this.tableData[0].PatientId
              this.userid = this.tableData[0].UserId
          }
        }
        }

        }

    },
    cancelAutoUpdate: function()
    {
        clearInterval(this.timer)
    }

  },
    beforeDestroy()
    {
        clearInterval(this.timer)
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



</style>
