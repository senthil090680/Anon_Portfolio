var OxO3150=["top","dialogArguments","opener","_dialog_arguments","document","editor","window","element","changed","propertyName","value","checked","trim","prototype",""];function Window_GetDialogTop(Ox2c6){return Ox2c6[OxO3150[0]];} ;function Window_FindDialogArguments(Ox2c6){var Ox348=Ox2c6[OxO3150[0]];if(Ox348[OxO3150[1]]){return Ox348[OxO3150[1]];} ;var Ox349=Ox348[OxO3150[2]];if(Ox349==null){return Ox348[OxO3150[4]][OxO3150[3]];} ;var Ox34a=Ox349[OxO3150[4]][OxO3150[3]];if(Ox34a==null){return Window_FindDialogArguments(Ox349);} ;return Ox34a;} ;var arg=Window_FindDialogArguments(window);var editor=arg[OxO3150[5]];var editwin=arg[OxO3150[6]];var editdoc=arg[OxO3150[4]];var element=arg[OxO3150[7]];var syncingtoview=false;Window_GetDialogTop(window)[OxO3150[8]]=Window_GetDialogTop(window)[OxO3150[8]]||arg[OxO3150[8]];function OnPropertyChange(){if(syncingtoview){return ;} ;var Ox453=Event_GetEvent();if(Ox453[OxO3150[9]]!=OxO3150[10]&&Ox453[OxO3150[9]]!=OxO3150[11]){return ;} ;FireUIChanged();} ;function FireUIChanged(){Window_GetDialogTop(window)[OxO3150[8]]=true;SyncTo(element);UpdateState();} ;function SyncToViewInternal(){syncingtoview=true;try{SyncToView();UpdateState();} finally{syncingtoview=false;} ;} ;String[OxO3150[13]][OxO3150[12]]=function (){return this.replace(/(^\s*)|(\s*$)/g,OxO3150[14]);} ;function UpdateState(){} ;function SyncTo(element){} ;function SyncToView(){} ;