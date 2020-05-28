sap.ui.controller("zcoronaapp.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zcoronaapp.main
*/
	onInit: function() {
		
		var oView = this.getView();
		var oData = $.ajax({
			type: "GET",
			url: "https://api.covid19india.org/data.json",
			async: false,
			dataType: "json",
			
			success: function(data, textStatus, jqXHR){
				var oModel = new sap.ui.model.json.JSONModel(data);
				oView.setModel(oModel, "oModel");
			}
		});
	},

	onSearch: function (evt) {
		
		// add filter for search
		var aFilters = [];
		var sQuery = evt.getSource().getValue();
		if (sQuery && sQuery.length > 0) {
			var filter = new sap.ui.model.Filter("state", sap.ui.model.FilterOperator.Contains, sQuery);
			aFilters.push(filter);
		}

		// update list binding
		var oTable = this.byId("idProductsTable");
		var oBinding = oTable.getBinding("items");
		oBinding.filter(aFilters, "Application");
		
	}
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zcoronaapp.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zcoronaapp.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zcoronaapp.main
*/
//	onExit: function() {
//
//	}

});