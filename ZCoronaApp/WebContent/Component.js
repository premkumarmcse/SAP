 var oloadData = null ;
jQuery.sap.declare("sap.eim.SalesOrderApproval.Component");
jQuery.sap.require("sap.eim.SalesOrderApproval.util.Formatter");
sap.ui.core.UIComponent.extend("sap.eim.SalesOrderApproval.Component", {

	
	
	metadata : {
		rootView : "sap.eim.SalesOrderApproval.view.Login",
		routing : {
			config : {
				targetsClass : "sap.m.routing.Router",
				viewPath : "sap.eim.SalesOrderApproval.view",
				controlId : "rootControl",
				controlAggregation : "pages",
				viewType : "XML"
			},
			routes: [
				
				{
					name: "login",
					pattern: "",
					target: "page1"
				},
				{
					name: "Report",
					pattern: "Report",
					target: "page2"
				}
						
							
					],
			targets : {
				
			
				page1 : {
					viewName : "Login",
					viewLevel : 0
				},
				page2 : {
					viewName : "Report",
					viewLevel : 1
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
		viewName : "sap.eim.SalesOrderApproval.view.App",
		url:"sap.eim.SalesOrderApproval.view.App",
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