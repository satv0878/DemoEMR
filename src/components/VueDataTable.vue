
<template>
<v-app>
<v-content>

 <v-img>

<v-toolbar color="#191919" >
  <v-toolbar-side-icon @click.stop="drawer = !drawer">
<div> 
     <span class="fas fa-list-old-style" style="color:#ED252A"></span>
</div>
</v-toolbar-side-icon>
 <v-divider class="ma-2" vertical inset></v-divider>
  <div>
    <span class="white--text" style=" font-size:large">Demo System</span>
  </div>
  <v-spacer class="ma-2"></v-spacer>
  <div>
    <span class="white--text" >{{UserLabel}}: </span>
    <span class="white--text" style=" font-size:large" > {{this.displayUserID}}</span>
    <v-divider class="ma-2" vertical inset></v-divider>
   <font-awesome-icon :icon="['far', 'user-circle']"   size="2x"  style="color:#323232"/>
  </div>

</v-toolbar>

  <v-container grid-list-md >

    <v-layout row justify-center>

     
  <v-flex lg6 pa-2>
     <v-card
      class="mx-auto" :flat = true width="540">
     <v-layout column >
       <v-flex>
        <v-card-title Patient>
            <div class="text-xs-left pl-2"  style="font-weight:bold" >{{PatientLabel}} - </div>
            <div class="text-xs-left pl-1" > identification</div>
         </v-card-title>
         </v-flex>

          <v-divider class="ma-3"></v-divider>

        <v-flex pr-4>
          <div class="text-xs-right" >
            <h1 >{{this.displayPatientID}}</h1>
          </div>
           </v-flex>
         </v-layout>
      </v-card>
   </v-flex>


     <v-flex lg6 pa-2>
     <v-card
      class="mx-auto" :flat = true width="540">
     <v-layout column >
       <v-flex>
        <v-card-title Device>
            <div class="text-xs-left pl-2"  style=" font-weight:bold" >Device - </div>
            <div class="text-xs-left pl-1" > name</div>
         </v-card-title>
         </v-flex>

          <v-divider class="ma-3"></v-divider>

        <v-flex pr-4>
          <div class="text-xs-right" >
              <h1 >{{this.displaySerialNumber}}</h1>
          </div>
           </v-flex>
         </v-layout>
      </v-card>
   </v-flex>


  <v-flex md6 pa-2>
   <v-card
      class="mx-auto" :flat = true width="540">
     <v-layout column>
       <v-flex >
        <v-card-title Weight>
            <div class="text-xs-left pl-2"  style=" font-weight:bold" >Weight - </div>
                <div class="text-xs-right pl-1">
            <span >{{this.displayWeightUnit}}</span>
          
          </div>
            </v-card-title>
        </v-flex>

        
          <v-divider class="ma-3"></v-divider>


      <v-flex  xs6 pr-4>
          <div  class="text-xs-right">
            <h1 >{{this.displayWeight}} {{this.displayWeightUnit}}</h1>
           
          </div>

      </v-flex>
        </v-layout>
      </v-card>
   </v-flex>



     <v-flex md6 pa-2>
   <v-card
      class="mx-auto" :flat = true width="540">
     <v-layout column>
       <v-flex >
        <v-card-title Height>
                 <div class="text-xs-left pl-2"  style=" font-weight:bold" >Height - </div>
     
            <div  class="text-xs-right  pl-1">
            <span>{{this.displayHeightUnit}}</span>
           

          </div>
            </v-card-title>
        </v-flex>
        
          <v-divider class="ma-3"></v-divider>

        <v-flex  xs6 pr-4>
          <div class="text-xs-right">
            <h1 >{{this.displayHeight}} {{this.displayHeightUnit}}</h1>
          </div>
        </v-flex>
        </v-layout>
      </v-card>
   </v-flex>
   

    <v-flex md12 pa-2>
   <v-card class="mx-auto" :flat = true>

<template>
  <div>

  <b-container fluid >
    <b-table class="text-left ml-0" @row-clicked="showHL7Dialog" :items="tableData" :fields="headers" @filtered="onFiltered" :filter="filter" :current-page="currentPage"  :per-page="perPage" >
    
    </b-table>
    <!-- User Interface controls -->

    </b-container>
  </div>
</template>
</v-card>

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
    <v-navigation-drawer
      dark
      v-model="drawer"
      absolute
      temporary>

         <v-toolbar flat >
<v-toolbar-side-icon >
  <v-icon>more_vert</v-icon>
</v-toolbar-side-icon>

        <v-list-tile-title class="title" color="#191919">
            Settings
          </v-list-tile-title>
          </v-toolbar>

           <v-layout column fill-height>

      <v-list class="pa-1">

 
   
      <v-list-group
        no-action
        prepend-icon="edit"
        active-class="error--text"
      >

      <template v-slot:activator>
          <v-list-tile>
             <v-tooltip right>
                 <template v-slot:activator="{ on }">
            <v-list-tile-title v-on="on"  >Notation</v-list-tile-title>
            </template>
              <span>Change the Notation of Patient and User to you customer specific notation (e.g. Fitness Member and Trainer) or language</span>
            </v-tooltip>
          </v-list-tile>
        </template>

<v-text-field outline hint="Define your Patient / Member Label" Label="Patient Identifier"  value="Patient" v-model="PatientLabel" v-on:input="PatientLabelChange"></v-text-field>
<v-text-field outline hint="Define your User / Trainer Label" Label="User Identifier"  value="User" v-model="UserLabel" v-on:input="UserLabelChange" ></v-text-field>


        </v-list-group>



      <v-list-group
        no-action
        prepend-icon="zoom_in"
        active-class="error--text"
      >
      <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Zoom</v-list-tile-title>
          </v-list-tile>
        </template>

        <v-list-tile avatar tag="div">

          <v-list-tile-action>
    <v-btn flat   @click="decrement()" v-model="zoom">
      <v-icon dark>remove</v-icon>
    </v-btn>
          </v-list-tile-action>
          <v-spacer></v-spacer>
          <v-list-tile-action>
    <v-btn flat   @click="increment()" v-model="zoom">
      <v-icon dark>add</v-icon>
    </v-btn>
          </v-list-tile-action>
        </v-list-tile>


        </v-list-group>


      <v-list-group
         no-action
        prepend-icon="table_chart"
        active-class="error--text"
      >
      

      <template v-slot:activator>
          <v-list-tile>
             <v-tooltip right>
                 <template v-slot:activator="{ on }">
            <v-list-tile-title v-on="on">Measurement Table</v-list-tile-title>
            </template>
              <span>Change the length of the measurement result list.</span>
            </v-tooltip>
          </v-list-tile>
        </template>

      
          <v-list-tile> </v-list-tile>
          <v-list-tile>

          <v-select
            v-model="perPage"
            :items="pageOptions"
            attach
            
            label="Table Results Per Page"
            solo
          ></v-select>

          </v-list-tile>

        </v-list-group>


              
      <v-list-group
         no-action
        prepend-icon="settings_remote"
        active-class="error--text"
      >
       <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>Barcodes</v-list-tile-title>
          </v-list-tile>
        </template>
          <v-list-tile> </v-list-tile>

          <v-text-field
          v-model="uidBarcode"
            label="User ID"
            maxlength="22" counter>
            </v-text-field>

          <v-list-tile></v-list-tile>
                <barcode v-bind:value="uidBarcode" :options="{ displayValue: false ,height: '40' , width:'1', format: 'CODE128' } "></barcode>
      
            <v-list-tile></v-list-tile>

              <v-divider></v-divider>
            
                <v-text-field v-model="pidBarcode" label="Patient ID" maxlength="22" counter ></v-text-field>
           
            <v-list-tile> </v-list-tile>

              <barcode v-model="pidBarcode" :options="{ displayValue: false , height: '40', width:'1', format: 'CODE128' }"></barcode>
      
          </v-list-group>
          
      </v-list>

    <v-tooltip right>
      <template v-slot:activator="{ on }">
      <v-btn v-on="on"  large flat @click="fullscreen()">
          Fullscreen
          <v-icon large dark right>desktop_mac</v-icon>
      </v-btn>
      
        </template>
        <span>Click to switch and leave Fullscreen mode.</span>
    </v-tooltip>

    <v-spacer vertical></v-spacer>

    <span>Current Version: {{appVersion}}</span>

    </v-layout>
    </v-navigation-drawer>


    <v-dialog v-model="dialog">
      <v-card>
        <v-card-title   class="headline grey lighten-2"
          primary-title>
          <span class="headline">HL7 Message</span>
        </v-card-title>
        <v-list dense>
          <v-list-tile
            v-for="msg in message"
            :key="msg.Index"
               @click="">
         
              <span v-for="(list, index ) in msg.Segment">

    <span  v-if="index === 0" style="font-weight:bolder;color:green;">{{list}}</span>
    <span  v-else-if="index === 6 && msg.Index === 0" style="font-family:'Arial Black';font-weight:bolder;color:red;">{{list}}</span>
    <span  v-else-if="index === 19 && msg.Index === 2" style="font-family:'Arial Black';font-weight:bolder;color:red;">{{list}}</span>
    <span  v-else-if="index === 7 && msg.Index === 3" style="font-family:'Arial Black';font-weight:bolder;color:red;">{{list}}</span>
    <span  v-else-if="index === 5 && msg.Index === 4" style="font-family:'Arial Black';font-weight:bolder;color:red;">{{list}}</span>
    <span  v-else-if="index === 5 && msg.Index === 5" style="font-family:'Arial Black';font-weight:bolder;color:red;">{{list}}</span>
     <span  v-else-if="index === 16 && msg.Index === 4" style="font-family:'Arial Black';font-weight:bolder;color:red;">{{list}}</span>
     <span  v-else-if="index === 16 && msg.Index === 5" style="font-family:'Arial Black';font-weight:bolder;color:red;">{{list}}</span>
     <span  v-else-if="index === 18 && msg.Index === 4" style="font-family:'Arial Black';font-weight:bolder;color:red;">{{list}}</span>
     <span  v-else-if="index === 18 && msg.Index === 5" style="font-family:'Arial Black';font-weight:bolder;color:red;">{{list}}</span>
     <span  v-else-if="index === 14 && msg.Index === 4" style="font-family:'Arial Black';font-weight:bolder;color:red;">{{list}}</span>
     <span  v-else-if="index === 14 && msg.Index === 5" style="font-family:'Arial Black';font-weight:bolder;color:red;">{{list}}</span>
     <span  v-else-if="index === 6 && msg.Index === 4" style="font-family:'Arial Black';font-weight:bolder;color:red;">{{list}}</span>
     <span  v-else-if="index === 6 && msg.Index === 5" style="font-family:'Arial Black';font-weight:bolder;color:red;">{{list}}</span>

    <span  v-else-if="index != 0" style="font-weight:bold;">{{list}}</span>

   

    <span  v-if="index != msg.Segment.length-1" style="font-weight:bolder;color:blue;">|</span>

  
  </span>
       
          </v-list-tile>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


      </div>
</v-app>

</template>

<script>

const {webFrame} = require('electron')


export default {



    data() {

        return {


isFullscreen : false,  
          message: [
          {

            Index: '',
            Type:'',
            Segment: ''  
          
            
          }
          ], 
         displayHeight: '-', 
          displayWeight:'-', 
          displayHeightUnit: '', 
          displayWeightUnit:'', 
          displayPatientID:'', 
          displayUserID:'', 
          displaySerialNumber:'', 
           appVersion : require('electron').remote.app.getVersion(), 
          dialog: false, 
          zoom: 1,
          drawer: null,
          totalRows: 1,
          filter: null,
          currentPage: 1,
          perPage: 5,
          pageOptions: [3,4,5,6,7,8,9,10,15,20,25,30,40,50],
          PatientLabel: 'Patient', 
          UserLabel: 'User', 
          snackbar: false,
          sheet: false,
          colorSnackbar: 'success',
          listeningPort: 5000,

          headers: [
            { key: 'PatientId', 
              sortable: false, 
              label: 'Patient ID'
              },
            
            { key: 'MeasurementType', 
              sortable: false, 
              label: 'Type', 
              
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
        HL7MessageHeader : [],
        HL7Message: [],
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
   
var self= this


var hl7 = require('simple-hl7');

///////////////////SERVER/////////////////////
var app = hl7.tcp();

app.use(function( req, res, next ) {
  //req.msg is the HL7 message

  self.snackbar = true
  
var pv1 = req.msg.getSegment('PV1');

var countOBX = req.msg.getSegments("OBX").length

console.log(req.msg.getSegments("OBX").length)
console.log(req.msg.toString())

      self.displayHeight = '-'
      self.displayWeight = '-'
      self.displaySerialNumber = ''
      self.displayPatientID = ''
      self.displayUserID = ''
      self.displayHeightUnit = ''
      self.displayWeightUnit = ''

req.msg.getSegments("OBX").forEach(function(segment) {



  

  var value = segment.fields[4].value[0][0];
  var user = segment.fields[15].value[0][0];
  var type = segment.fields[2].value[0][0];
  var unit = segment.fields[5].value[0][0];
  var time = segment.fields[13].value[0][0];
  var deviceName = segment.fields[17].value[0][0];
  //var serialnumber = segment.fields[17][4].value[0][0];




                  if (type == 'Weight')
                  {
                  self.displayWeight= value.toString()
                  self.displayWeightUnit = unit.toString()
                  self.displaySerialNumber = deviceName.toString()
                  self.displayPatientID = pv1.getComponent(19, 1).toString()
                  self.displayUserID = user.toString()

                  
                  }
                  if(type == 'Height')
                  {

                    self.displayHeight= value.toString()
                    self.displayHeightUnit = unit.toString()
                    self.displaySerialNumber = deviceName.toString()
                    self.displayPatientID = pv1.getComponent(19, 1).toString()
                    self.displayUserID = user.toString()
                  }



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
        HL7MessageHeader : req.msg.header, 
        HL7Message: req.msg.segments,
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

app.use(function(req, res){
  //res.ack is the ACK
  //acks are created automatically

  //send the res.ack back
  res.end()
})

app.use(function(err, req, res) {
  //error handler
  //standard error middleware would be


  var msa = res.ack.getSegment('MSA');
  msa.editField(1, 'AR');
  res.ack.addSegment('ERR', err.message);
  res.end();
});

//Listen on port 7777
app.start(self.listeningPort);
///////////////////SERVER/////////////////////

}
,


methods:{

  fullscreen()
  {

    if (this.isFullscreen)
    {
      this.isFullscreen = false
        var electron = require('electron');
        var window = electron.remote.getCurrentWindow();
        window.setFullScreen(this.isFullscreen);
    }
    else{
      this.isFullscreen = true
        var electron = require('electron');
        var window = electron.remote.getCurrentWindow();
        window.setFullScreen(this.isFullscreen);

    }



  }, 

      showHL7Dialog(item, index, event)
      {
        this.message =[]

        var self= this

        var hl7 = require('simple-hl7');
        this.dialog= true;
        var segments = this.tableData[index].HL7Message
        var header  =this.tableData[index].HL7MessageHeader
        var parser = new hl7.Parser()


     

          self.message.push({Index: 0, Segment :parser.parseHeader(header.toString()).toString().split('|'), 
                              Type: header.name.toString() })

          for (var i = 0; i < segments.length; i++) {
          
             var returnString = segments[i].toString(header.delimiters).split('|');

          self.message.push({Index: i+1 , Segment :returnString, 
                              Type: segments[i].name.toString() })

             if (i != segments.length - 1) {returnString = header.delimiters.segmentSeperator;}
           }
      }, 

      UserLabelChange()
      {
      
      this.headers[5].label = this.UserLabel + ' ID'
      },

            PatientLabelChange()
      {
      
      this.headers[0].label = this.PatientLabel + ' ID'
      },

      decrement()
      {
        this.zoom =(this.zoom - 0.05);
        webFrame.setZoomFactor(this.zoom);
   
      }, 
      
      increment()
      {
        this.zoom = (this.zoom + 0.05);
        webFrame.setZoomFactor(this.zoom);
          

      }, 
      setZoomFactor(value)
      {
          webFrame.setZoomFactor(value);      
      },
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
