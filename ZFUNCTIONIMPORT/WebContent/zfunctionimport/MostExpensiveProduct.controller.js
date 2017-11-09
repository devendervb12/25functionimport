sap.ui.controller("zfunctionimport.MostExpensiveProduct", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zfunctionimport.MostExpensiveProduct
*/
	onInit: function() {
		
		var oModel = new sap.ui.model.odata.v2.ODataModel(
		"proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_BATCH25_PRODUCT_SRV/"		
		);
		this.getView().setModel(oModel);
		
		oModel.callFunction("DetermineMostExpensiveProduct", {
			method : "GET",
			urlParameters : { Category : "Notebooks" },
			success : function(){
				debugger;
				sap.m.MessageToast.show("Determined");
			},
			error : function(){
				sap.m.MessageToast.show("Not Determined");
			}
		})

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zfunctionimport.MostExpensiveProduct
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zfunctionimport.MostExpensiveProduct
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zfunctionimport.MostExpensiveProduct
*/
//	onExit: function() {
//
//	}

});