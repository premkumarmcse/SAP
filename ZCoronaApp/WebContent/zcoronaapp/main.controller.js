sap.ui.controller("zcoronaapp.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zcoronaapp.main
*/
	onInit: function() {

		var oView = this.getView();
		
		//Accessing the table from the fragment by it's Id	
			var oTable = this.byId("idProductsTable");
	
		//column list item creation
			var oTemplate = new sap.m.ColumnListItem({
				cells: [new sap.m.Text({
					text: "{state}"
				}), new sap.m.Text({
					text: "{active}"
				}), new sap.m.Text({
					text: "{confirmed}"
				}), new sap.m.Text({
					text: "{recovered}"
				}), new sap.m.Text({
					text: "{deaths}"
				}), new sap.m.Text({
					text: "{lastupdatedtime}"
				})]
			});
				
		//Setting model to the table
			var oModel = new sap.ui.model.json.JSONModel();
			oModel.loadData("https://api.covid19india.org/data.json");
			sap.ui.getCore().setModel(oModel);
			oTable.setModel(oModel);
			oTable.bindAggregation("items", {
				path: "/statewise",
				template: oTemplate
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