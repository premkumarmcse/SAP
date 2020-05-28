 var oloadData = null ;
sap.ui.core.UIComponent.extend("", {

	
	
	metadata : {
		rootView : "ZCoronaApp.view.main",
		"config" : {
			"fullWidth": true
		},
		routing : {
			config : {
				targetsClass : "sap.m.routing.Router",
				viewPath : "ZCoronaApp.view",
				controlId : "rootControl",
				controlAggregation : "pages",
				viewType : "XML"
			},
			routes: [
				{
					name: "main",
					pattern: "",
					target: "page1"
				},				
					],
			targets : {
				page1 : {
					viewName : "main",
					viewLevel : 0
				}
			}
		}
	},
	
 

	init : function() {
		
	     
		jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
	      sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
	      this.routeHandler = new sap.m.routing.RouteMatchedHandler(this.getRouter());
	      this.getRouter().initialize();
	},
	
	
	createContent : function() {
		var oView = sap.ui.view({
		id : "app",
		viewName : "ZCoronaApp.view.main",
		url:"ZCoronaApp.view.main",
		type : "XML",
		viewData : { component : this }
		});
	
	
		var deviceModel = new sap.ui.model.json.JSONModel({
		isTouch : sap.ui.Device.support.touch,
		isNoTouch : !sap.ui.Device.support.touch,
		isPhone : sap.ui.Device.system.phone,
		isNoPhone : !sap.ui.Device.system.phone,
		listMode : sap.ui.Device.system.phone ? "None" : "SingleSelectMaster",
		listItemType : sap.ui.Device.system.phone ? "Active" : "Inactive"
		});
		deviceModel.setDefaultBindingMode("OneWay");
		this.setModel(deviceModel, "device");


	var i18nModel = new sap.ui.model.resource.ResourceModel({
		bundleUrl : "i18n/messageBundle.properties"
		});
		oView.setModel(i18nModel, "i18n");


	



		return oView;
		}
	
	
});