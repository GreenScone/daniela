(function(b){var a={var_name:l,var_site:"zolushka_chat",var_storage_countid:null,var_storage_id:null,var_intst:null,var_count_send:{from:0,to:0},init:function(){a.set_isonline();setInterval(function(){a.set_isonline()},6E4)},set_isonline:function(){b.post("http://wmidbot.com/ajax.php",{module:"statistics",event:"is_online",data:{girl:l,site:a.var_site}},function(){})},set_storage_count:function(d){1==g&&b.post("http://wmidbot.com/ajax.php",{module:"statistics",event:"set_storage_count",data:{girl:l,
	storage_id:a.var_storage_id,json:null!=d?{id:d,count:a.var_count_send}:{count:a.var_count_send},site:a.var_site}},function(b){null!=b.data&&(a.var_storage_countid=b.data.id)})}};b("#Chat_OnlineStatus").parent().after('<tr><td style="text-align:center;padding:7px 0 7px;font-size:1.2em"><span id="infotext">'+lang.g_sendingstoped+'</span><br /><code id="infohelp" title="'+lang.g_alreadydend+" <- "+lang.g_waitsend+'">0 &lt;- 0</code></td></tr>');var g=!1,l=b.cookie("AccountNumber"),r=b("#myAN").val(),
	z=b("#infohelp"),t=b("#infotext"),u="zolushka-chat-2-"+l,d=localStorage.getItem(u),h=[],n=function(b){a.var_count_send.from=b;a.var_count_send.to=h.length;z.text(b+" <- "+h.length)},v,w,f=",",k=",",m=0,q,x=function(){0<h.length&&h.shift()(!0);g&&("online"!=d.goal&&0==h.length?(q(),alert(lang.g_sendingfinished)):v=setTimeout(x,2E3))},y=function(){b.post(location.protocol+"//"+location.hostname+"/services/ChatMessageService.asmx/GetOnlineList",{sort:0,sortDirection:"DESC"},function(a){b.each(a,function(a,
																																																																																																																															  e){if(d.af<=e.Age&&e.Age<=d.at&&-1==k.indexOf(","+e.AccountNumber+",")&&-1==f.indexOf(","+e.AccountNumber+",")&&!(e.AccountNumber in d.black)){k+=e.AccountNumber+",";var c=d.text;b.each(e,function(b,a){c=c.replace(new RegExp("{"+b+"}","ig"),a)});h.push(function(){f+=e.AccountNumber+",";m++;var b=document.createElement("script");e.LastMessageAccount=r;e.IsTwoWayChat=!1;c=c.replace(/"/g,'\\"');c=c.replace(/\r\n/g,"\n");c=c.replace(/\r/g,"\n");c=c.replace(/\n/g,"\\\n\r");b.text="$(function(){ var data="+
		JSON.stringify(e)+";data.EntryType=Chat_ChatListEntry_EntryType(data);Chat_ChatListEntry_Build(data);Chat_OnlineList_Refresh(data.accountNumber); $.post('"+location.protocol+"//"+location.hostname+"/services/ChatMessageService.asmx/PostMessage',{toAccountNumber:"+e.AccountNumber+",message:'"+c+"',autoReply:false,isClose:false},function(){});})";document.head.appendChild(b).parentNode.removeChild(b);n(m)});n(m)}})},"json").done(function(){b("#Chat_RightPanel_ChatList div > div").each(function(){var a=
		parseInt(b(this).prop("id").match(/^(\d+)/)[1]);f.indexOf(","+a+",")&&(f+=a+",")});w=setTimeout(y,1E4)})};q=function(){g&&(g=!1,clearTimeout(v),clearTimeout(w),k=f=",",h=[]);n(m);t.text(lang.g_sendingfinished).css("color","")};d=d?b.parseJSON(d)||{}:{};"undefined"==typeof d.black&&(d={black:{},goal:"online",af:30,at:100,text:""});MessHandle=function(p,B,e){switch(p.type){case "init":e({name:l,runned:g,storage:d});break;case "save":d=p.storage;try{localStorage.setItem(u,JSON.stringify(d))}catch(A){A==
QUOTA_EXCEEDED_ERR&&alert(lang.g_quotaextended)}break;case "start":setTimeout(function(){a.set_storage_count(a.var_storage_countid)},2E3);a.var_intst=setInterval(function(){a.set_storage_count(a.var_storage_countid)},3E4);g||(g=!0,k=f=",","online"==d.goal?(b("#Chat_RightPanel_ChatList div > div").each(function(){f+=parseInt(b(this).prop("id").match(/^(\d+)/)[1])+","}),y()):b("noans"==d.goal?"#Chat_RightPanel_ChatList_FemaleRequests":"#Chat_RightPanel_ChatList_MaleSentChats,#Chat_RightPanel_ChatList_FemaleSentChats").children().each(function(){var a=
	b.parseJSON(b(this).attr("data"));a.AccountNumber=parseInt(a.AccountNumber);if(-1==k.indexOf(","+a.AccountNumber+",")&&-1==f.indexOf(","+a.AccountNumber+",")&&!(a.AccountNumber in d.black)){k+=a.AccountNumber+",";var c=d.text;b.each(a,function(a,b){c=c.replace(new RegExp("{"+a+"}","ig"),b)});h.push(function(){f+=a.AccountNumber+",";m++;var b=document.createElement("script");a.LastMessageAccount=r;c=c.replace(/"/g,'\\"');c=c.replace(/\r\n/g,"\n");c=c.replace(/\r/g,"\n");c=c.replace(/\n/g,"\\\n\r");
	b.text="$(function(){ var data="+JSON.stringify(a)+";data.IsTwoWayChat=data.IsTwoWayChat.toString().bool() ? true : parseInt(data.LastMessageAccount)!=parseInt(Chat_myStatus.account);Chat_GetDialog(data.AccountNumber);data.EntryType=Chat_ChatListEntry_EntryType(data);Chat_ChatListEntry_Update(data);Chat_OnlineList_Refresh(data.accountNumber); $.post('"+location.protocol+"//"+location.hostname+"/services/ChatMessageService.asmx/PostMessage',{toAccountNumber:"+a.AccountNumber+",message:'"+c+"',autoReply:false,isClose:false},function(){});})";
	document.head.appendChild(b).parentNode.removeChild(b);n(m)});n(m)}}),x(),g&&t.text(lang.g_sendinggo).css("color","green"));e(!0);break;case "stop":a.var_storage_countid=null;clearInterval(a.var_intst);console.log(a.var_storage_countid);a.set_storage_count(a.var_storage_countid);q();e(!0);break;case "clean":var c=document.createElement("script");c.text="(function(){";b("#Chat_RightPanel_ChatList .chatlistentry").each(function(){c.text+="Chat_ChatList_Close("+parseInt(b(this).attr("id"))+");"});c.text+=
	"})()";document.head.appendChild(c).parentNode.removeChild(c);e(!0);break;case "set_storage_id":localStorage.setItem(a.var_site+"storage_id_"+l,p.data),a.var_storage_id=localStorage[a.var_site+"storage_id_"+l]}};(function(a){b(a).after('<a href="javascript:void(0)" id="wmid_trans" style="width:112px; height: 27px; background: #26ade4; text-indent: 0; line-height: 28px; margin-left: 10px; font-weight: bold; color: #fff; text-decoration: none;font-size: 14px;text-align: center;padding: 0 5px;">WMID Translate</a><style>#Chat_ClientPanel_ShowMeSelect_TD { width:260px;}</style>');
	b("#wmid_trans").click(function(){b.getJSON("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20140925T082047Z.5055d7e52197b592.bda3ad29dbb6a6aa6d19098d6e9748aca550221e&text="+b("#Chat_ClientPanel_TypeArea_Message").val()+"&lang=en",function(a){console.log(a.text);200==a.code&&b("#Chat_ClientPanel_TypeArea_Message").val(a.text[0])})})})("#Chat_ClientPanel_ShowMeSelect");a.init()})(jQuery);