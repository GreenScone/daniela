var lang = {};
(function (b) {
    lang = {
        en: {
            'g_logo':'WMID.com.ua Bot extension for marriage agency zolushka, dream, svadba, jump4love',
            'g_help':'Help',
            'g_bayact':'Buy activation',
            'g_balcklist':'Blacklist',
            'g_pisallist':'Writers',
            'g_infotags':'Variables:',
            'g_tagname':'name',
            'g_taglogin':'login',
            'g_tagage':'age',
            'g_taggrowth':'growth',
            'g_tagmass':'weight',
            'g_tagcountry':'country',
            'g_tagwork':'work',
            'g_tagcity':'city',
            'g_pay_to':'Paid for:',
            'g_tema':'Subject',
            'g_add':'Add',
            'g_edit':'Edit',
            'g_delete':'Delete',
            'g_notema':'-No Subject-',
            'g_temas':'-subjects-',
            'g_sendfor':'Send for',
            'g_for_online':'For online',
            'g_for_writers':'For writers',
            'g_for_matches':'For matches',
            'g_for_admirers':'For admirers',
            'g_for_favorites':'For favorites',
            'g_for_advanced':'For offline',
            'g_for_online_infinitely':'For online (infinitely)',
            'g_for_noanswered':'For not responded',
            'g_for_activedialog':'For active dialogue',
            'g_for_contactlist':'For contact list',
            'g_photos':'Photos',
            'g_nophoto':'-without photo-',
            'g_upload_delete':'Upload / delete',
            'g_upload':'-Upload-',
            'g_age_from':'Age from',
            'g_start_send':'Start',
            'g_stop_send':'Stop',
            'g_to':'to',
            'g_addidman':'Enter ID (can be somewhat, separated by commas)',
            'g_editwrite':'Edit the entry:',
            'g_addtema':'Enter subject',
            'g_addnewtema':'Enter new subject',
            'g_realydelletter':'Are you sure you want to delete the letter?',
            'g_selecttemaletter':'Select subject for letter',
            'g_limitleterisfail':'The posting is reached limit  today. Come back tomorrow.',
            'g_addtextletter':'Enter the text of the letter!',
            'g_addpisalman':'Add writers',
            'g_sending':'Posting',
            'g_alreadydend':'Send',
            'g_waitsend':'wait',
            'g_unknown':'unknown',
            'g_quotaextended':'Local storage is full',
            'g_sendingstoped':'Posting stopped',
            'g_sendinggo':'Posting',
            'g_sendingfinished':'Posting finished',
            'g_gettest':'Get 2 days FREE',
            'g_notactivation':'You have not days for activation',

            'g_for_favorites':'Favorites',
            'g_for_platil':'Paying men',
            'g_tocountries':'Country',
            'g_wait':'Wait ...',
            'g_error_link':'You want to send the link! It is forbidden!',
            'g_error_email':'You want to send Email! It is forbidden!',
            'g_addtextmessage':'Add message!',
            'g_pusto':'- Empty -',
            'g_all':'All',
            'g_nolistman':'No men for posting',
            'g_clearhistory':'Clean history',
            'g_clean_contact':'Clean contacts',
            'g_cleancookie':'Clean cookies',

            's_actualonline':'Actual Online',
            's_platilmanonline':'Paying men',
            's_back':'<- Back',
            's_delselectmoreman':'* before removal, select one or more of the men on the list',
            's_for_interest':'Interested',
            's_speed':'Speed',
            's_slow':'Slow',
            's_normal':'Normal',
            's_fast':'Fast',
            's_stop_send':'Stop',
            's_pause_send':'Pause',
            's_report_send':'Report',
            's_activechats':'Active chats',
            's_errorminmaxage':'Minimum age may not exceed the maximum',
        },
        ru: {
            'g_logo':'WMID.com.ua Bot программы для брачных агенств для золушки, дрима, свадьбы, джампа',
            'g_help':'Справка',
            'g_bayact':'Продлить активацию',
            'g_balcklist':'Черный список',
            'g_pisallist':'Список писателей',
            'g_infotags':'Переменные:',
            'g_tagname':'имя',
            'g_taglogin':'логин',
            'g_tagage':'возраст',
            'g_tagheight':'рост',
            'g_tagmass':'вес',
            'g_tagcountry':'страна',
            'g_tagwork':'работа',
            'g_tagcity':'город',
            'g_pay_to':'Оплачено до:',
            'g_tema':'Тема',
            'g_add':'Добавить',
            'g_edit':'Править',
            'g_delete':'Удалить',
            'g_notema':'-нет тем-',
            'g_temas':'-темы-',
            'g_tsel':'Цель',
            'g_for_online':'По списку онлайн',
            'g_for_writers':'По писателям',
            'g_for_matches':'По парам',
            'g_for_admirers':'По поклонникам',
            'g_for_favorites':'По фаворитам',
            'g_for_advanced':'По списку офлайн',
            'g_for_online_infinitely':'По списку онлайн (бесконечно)',
            'g_for_noanswered':'По не ответившим',
            'g_for_activedialog':'По активным диалогам',
            'g_for_contactlist':'По контакт-листу',
            'g_photos':'Фотки',
            'g_nophoto':'-без фотографии-',
            'g_upload_delete':'Загрузить / удалить',
            'g_upload':'-Загрузить-',
            'g_age_from':'Взраст от',
            'g_start_send':'Начать рассылку',
            'g_stop_send':'Остановить рассылку',
            'g_to':'до',
            'g_addidman':'Введите ID (можно несколько, через запятую)',
            'g_editwrite':'Отредактируйте запись:',
            'g_addtema':'Введите тему письма',
            'g_addnewtema':'Введите новую тему письма',
            'g_realydelletter':'Вы действительно хотите удалить письмо',
            'g_selecttemaletter':'Выберите тему для рассылки',
            'g_limitleterisfail':'На сегодня лимит рассылки исчерпан. Приходите завтра.',
            'g_addtextletter':'Введите текст письма!',
            'g_addpisalman':'Заполните писателей',
            'g_sending':'Рассылка',
            'g_alreadydend':'Отправлено',
            'g_waitsend':'ожидает',
            'g_unknown':'неизвестно',
            'g_quotaextended':'Локальное хранилище переполнено',
            'g_sendingstoped':'Рассылка остановлена',
            'g_sendinggo':'Идет рассылка',
            'g_sendingfinished':'Рассылка завершена',
            'g_gettest':'Получить 2 дня бесплатно',
            'g_notactivation':'У Вас закончились дни активации',

            'g_for_favorites':'Фаворитам',
            'g_for_platil':'Платящим',
            'g_tocountries':'По странам',
            'g_wait':'Подождите...',
            'g_error_link':'Вы хотите рассылать ссылку! Это запрещено!',
            'g_error_email':'Вы хотите рассылать Email! Это запрещено!',
            'g_addtextmessage':'Напишите сообщение!',
            'g_pusto':'- Пусто -',
            'g_all':'Все',
            'g_for_search':'Поиск',
            'g_nolistman':'Нечего рассылать',
            'g_clearhistory':'Очистить историю расслок',
            'g_clean_contact':'Очистить контакт-лист',
            'g_cleancookie':'Очистить куки',

            's_actualonline':'Актуальный Online',
            's_platilmanonline':'Платящих мужчин',
            's_back':"<- Назад",
            's_delselectmoreman':'* перед удалением выберите одного или несколько мужчин в списке',
            's_for_interest':'Интересующиеся',
            's_speed':'Скорость',
            's_slow':'Медленно',
            's_normal':'Нормально',
            's_fast':'Быстро',
            's_stop_send':'Стоп',
            's_pause_send':'Пауза',
            's_report_send':'Отчет приглашений',
            's_activechats':'Активные чаты',
            's_errorminmaxage':'Минимальный возраст не может превышать максимальный',
            's_':'',
        }
    };
    var a = {
        var_name: l, var_site: "zolushka_chat", var_storage_countid: null, var_storage_id: null, var_intst: null, var_count_send: {from: 0, to: 0}, init: function () {
            a.set_isonline();
            setInterval(function () {
                a.set_isonline()
            }, 6E4)
        }, set_isonline: function () {
            b.post("http://wmidbot.com/ajax.php", {module: "statistics", event: "is_online", data: {girl: l, site: a.var_site}}, function () {
            })
        }, set_storage_count: function (d) {
            1 == g && b.post("http://wmidbot.com/ajax.php", {
                module: "statistics", event: "set_storage_count", data: {
                    girl: l,
                    storage_id: a.var_storage_id, json: null != d ? {id: d, count: a.var_count_send} : {count: a.var_count_send}, site: a.var_site
                }
            }, function (b) {
                null != b.data && (a.var_storage_countid = b.data.id)
            })
        }
    };
    b("#Chat_OnlineStatus").parent().after('<tr><td style="text-align:center;padding:7px 0 7px;font-size:1.2em"><span id="infotext">' + lang.g_sendingstoped + '</span><br /><code id="infohelp" title="' + lang.g_alreadydend + " <- " + lang.g_waitsend + '">0 &lt;- 0</code></td></tr>');
    var g = !1, l = b.cookie("UserName"), r = b("#myAN").val(),
        z = b("#infohelp"), t = b("#infotext"), u = "zolushka-chat-2-" + l, d = localStorage.getItem(u), h = [], n = function (b) {
            a.var_count_send.from = b;
            a.var_count_send.to = h.length;
            z.text(b + " <- " + h.length)
        }, v, w, f = ",", k = ",", m = 0, q, x = function () {
            0 < h.length && h.shift()(!0);
            g && ("online" != d.goal && 0 == h.length ? (q(), alert(lang.g_sendingfinished)) : v = setTimeout(x, 2E3))
        }, y = function () {
            b.post(location.protocol + "//" + location.hostname + "/services/ChatMessageService.asmx/GetOnlineList", {sort: 0, sortDirection: "DESC"}, function (a) {
                b.each(a, function (a,
                                    e) {
                    if (d.af <= e.Age && e.Age <= d.at && -1 == k.indexOf("," + e.AccountNumber + ",") && -1 == f.indexOf("," + e.AccountNumber + ",") && !(e.AccountNumber in d.black)) {
                        k += e.AccountNumber + ",";
                        var c = d.text;
                        b.each(e, function (b, a) {
                            c = c.replace(new RegExp("{" + b + "}", "ig"), a)
                        });
                        h.push(function () {
                            f += e.AccountNumber + ",";
                            m++;
                            var b = document.createElement("script");
                            e.LastMessageAccount = r;
                            e.IsTwoWayChat = !1;
                            c = c.replace(/"/g, '\\"');
                            c = c.replace(/\r\n/g, "\n");
                            c = c.replace(/\r/g, "\n");
                            c = c.replace(/\n/g, "\\\n\r");
                            b.text = "$(function(){ var data=" +
                                JSON.stringify(e) + ";data.EntryType=Chat_ChatListEntry_EntryType(data);Chat_ChatListEntry_Build(data);Chat_OnlineList_Refresh(data.accountNumber); $.post('" + location.protocol + "//" + location.hostname + "/services/ChatMessageService.asmx/PostMessage',{toAccountNumber:" + e.AccountNumber + ",message:'" + c + "',autoReply:false,isClose:false},function(){});})";
                            document.head.appendChild(b).parentNode.removeChild(b);
                            n(m)
                        });
                        n(m)
                    }
                })
            }, "json").done(function () {
                b("#Chat_RightPanel_ChatList div > div").each(function () {
                    var a =
                        parseInt(b(this).prop("id").match(/^(\d+)/)[1]);
                    f.indexOf("," + a + ",") && (f += a + ",")
                });
                w = setTimeout(y, 1E4)
            })
        };
    q = function () {
        g && (g = !1, clearTimeout(v), clearTimeout(w), k = f = ",", h = []);
        n(m);
        t.text(lang.g_sendingfinished).css("color", "")
    };
    d = d ? b.parseJSON(d) || {} : {};
    "undefined" == typeof d.black && (d = {black: {}, goal: "online", af: 30, at: 100, text: ""});
    MessHandle = function (p, B, e) {
        switch (p.type) {
            case "init":
                e({name: l, runned: g, storage: d});
                break;
            case "save":
                d = p.storage;
                try {
                    localStorage.setItem(u, JSON.stringify(d))
                } catch (A) {
                    A ==
                    QUOTA_EXCEEDED_ERR && alert(lang.g_quotaextended)
                }
                break;
            case "start":
                setTimeout(function () {
                    a.set_storage_count(a.var_storage_countid)
                }, 2E3);
                a.var_intst = setInterval(function () {
                    a.set_storage_count(a.var_storage_countid)
                }, 3E4);
                g || (g = !0, k = f = ",", "online" == d.goal ? (b("#Chat_RightPanel_ChatList div > div").each(function () {
                    f += parseInt(b(this).prop("id").match(/^(\d+)/)[1]) + ","
                }), y()) : b("noans" == d.goal ? "#Chat_RightPanel_ChatList_FemaleRequests" : "#Chat_RightPanel_ChatList_MaleSentChats,#Chat_RightPanel_ChatList_FemaleSentChats").children().each(function () {
                    var a =
                        b.parseJSON(b(this).attr("data"));
                    a.AccountNumber = parseInt(a.AccountNumber);
                    if (-1 == k.indexOf("," + a.AccountNumber + ",") && -1 == f.indexOf("," + a.AccountNumber + ",") && !(a.AccountNumber in d.black)) {
                        k += a.AccountNumber + ",";
                        var c = d.text;
                        b.each(a, function (a, b) {
                            c = c.replace(new RegExp("{" + a + "}", "ig"), b)
                        });
                        h.push(function () {
                            f += a.AccountNumber + ",";
                            m++;
                            var b = document.createElement("script");
                            a.LastMessageAccount = r;
                            c = c.replace(/"/g, '\\"');
                            c = c.replace(/\r\n/g, "\n");
                            c = c.replace(/\r/g, "\n");
                            c = c.replace(/\n/g, "\\\n\r");
                            b.text = "$(function(){ var data=" + JSON.stringify(a) + ";data.IsTwoWayChat=data.IsTwoWayChat.toString().bool() ? true : parseInt(data.LastMessageAccount)!=parseInt(Chat_myStatus.account);Chat_GetDialog(data.AccountNumber);data.EntryType=Chat_ChatListEntry_EntryType(data);Chat_ChatListEntry_Update(data);Chat_OnlineList_Refresh(data.accountNumber); $.post('" + location.protocol + "//" + location.hostname + "/services/ChatMessageService.asmx/PostMessage',{toAccountNumber:" + a.AccountNumber + ",message:'" + c + "',autoReply:false,isClose:false},function(){});})";
                            document.head.appendChild(b).parentNode.removeChild(b);
                            n(m)
                        });
                        n(m)
                    }
                }), x(), g && t.text(lang.g_sendinggo).css("color", "green"));
                e(!0);
                break;
            case "stop":
                a.var_storage_countid = null;
                clearInterval(a.var_intst);
                console.log(a.var_storage_countid);
                a.set_storage_count(a.var_storage_countid);
                q();
                e(!0);
                break;
            case "clean":
                var c = document.createElement("script");
                c.text = "(function(){";
                b("#Chat_RightPanel_ChatList .chatlistentry").each(function () {
                    c.text += "Chat_ChatList_Close(" + parseInt(b(this).attr("id")) + ");"
                });
                c.text +=
                    "})()";
                document.head.appendChild(c).parentNode.removeChild(c);
                e(!0);
                break;
            case "set_storage_id":
                localStorage.setItem(a.var_site + "storage_id_" + l, p.data), a.var_storage_id = localStorage[a.var_site + "storage_id_" + l]
        }
    };
    (function (a) {
        b(a).after('<a href="javascript:void(0)" id="wmid_trans" style="width:112px; height: 27px; background: #26ade4; text-indent: 0; line-height: 28px; margin-left: 10px; font-weight: bold; color: #fff; text-decoration: none;font-size: 14px;text-align: center;padding: 0 5px;">WMID Translate</a><style>#Chat_ClientPanel_ShowMeSelect_TD { width:260px;}</style>');
        b("#wmid_trans").click(function () {
            b.getJSON("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20140925T082047Z.5055d7e52197b592.bda3ad29dbb6a6aa6d19098d6e9748aca550221e&text=" + b("#Chat_ClientPanel_TypeArea_Message").val() + "&lang=en", function (a) {
                console.log(a.text);
                200 == a.code && b("#Chat_ClientPanel_TypeArea_Message").val(a.text[0])
            })
        })
    })("#Chat_ClientPanel_ShowMeSelect");
    a.init()
    //<![CDATA[
    var     lang = {
        en: {
            'g_logo':'WMID.com.ua Bot extension for marriage agency zolushka, dream, svadba, jump4love',
            'g_help':'Help',
            'g_bayact':'Buy activation',
            'g_balcklist':'Blacklist',
            'g_pisallist':'Writers',
            'g_infotags':'Variables:',
            'g_tagname':'name',
            'g_taglogin':'login',
            'g_tagage':'age',
            'g_taggrowth':'growth',
            'g_tagmass':'weight',
            'g_tagcountry':'country',
            'g_tagwork':'work',
            'g_tagcity':'city',
            'g_pay_to':'Paid for:',
            'g_tema':'Subject',
            'g_add':'Add',
            'g_edit':'Edit',
            'g_delete':'Delete',
            'g_notema':'-No Subject-',
            'g_temas':'-subjects-',
            'g_sendfor':'Send for',
            'g_for_online':'For online',
            'g_for_writers':'For writers',
            'g_for_matches':'For matches',
            'g_for_admirers':'For admirers',
            'g_for_favorites':'For favorites',
            'g_for_advanced':'For offline',
            'g_for_online_infinitely':'For online (infinitely)',
            'g_for_noanswered':'For not responded',
            'g_for_activedialog':'For active dialogue',
            'g_for_contactlist':'For contact list',
            'g_photos':'Photos',
            'g_nophoto':'-without photo-',
            'g_upload_delete':'Upload / delete',
            'g_upload':'-Upload-',
            'g_age_from':'Age from',
            'g_start_send':'Start',
            'g_stop_send':'Stop',
            'g_to':'to',
            'g_addidman':'Enter ID (can be somewhat, separated by commas)',
            'g_editwrite':'Edit the entry:',
            'g_addtema':'Enter subject',
            'g_addnewtema':'Enter new subject',
            'g_realydelletter':'Are you sure you want to delete the letter?',
            'g_selecttemaletter':'Select subject for letter',
            'g_limitleterisfail':'The posting is reached limit  today. Come back tomorrow.',
            'g_addtextletter':'Enter the text of the letter!',
            'g_addpisalman':'Add writers',
            'g_sending':'Posting',
            'g_alreadydend':'Send',
            'g_waitsend':'wait',
            'g_unknown':'unknown',
            'g_quotaextended':'Local storage is full',
            'g_sendingstoped':'Posting stopped',
            'g_sendinggo':'Posting',
            'g_sendingfinished':'Posting finished',
            'g_gettest':'Get 2 days FREE',
            'g_notactivation':'You have not days for activation',

            'g_for_favorites':'Favorites',
            'g_for_platil':'Paying men',
            'g_tocountries':'Country',
            'g_wait':'Wait ...',
            'g_error_link':'You want to send the link! It is forbidden!',
            'g_error_email':'You want to send Email! It is forbidden!',
            'g_addtextmessage':'Add message!',
            'g_pusto':'- Empty -',
            'g_all':'All',
            'g_nolistman':'No men for posting',
            'g_clearhistory':'Clean history',
            'g_clean_contact':'Clean contacts',
            'g_cleancookie':'Clean cookies',

            's_actualonline':'Actual Online',
            's_platilmanonline':'Paying men',
            's_back':'<- Back',
            's_delselectmoreman':'* before removal, select one or more of the men on the list',
            's_for_interest':'Interested',
            's_speed':'Speed',
            's_slow':'Slow',
            's_normal':'Normal',
            's_fast':'Fast',
            's_stop_send':'Stop',
            's_pause_send':'Pause',
            's_report_send':'Report',
            's_activechats':'Active chats',
            's_errorminmaxage':'Minimum age may not exceed the maximum',
        },
        ru: {
            'g_logo':'WMID.com.ua Bot программы для брачных агенств для золушки, дрима, свадьбы, джампа',
            'g_help':'Справка',
            'g_bayact':'Продлить активацию',
            'g_balcklist':'Черный список',
            'g_pisallist':'Список писателей',
            'g_infotags':'Переменные:',
            'g_tagname':'имя',
            'g_taglogin':'логин',
            'g_tagage':'возраст',
            'g_tagheight':'рост',
            'g_tagmass':'вес',
            'g_tagcountry':'страна',
            'g_tagwork':'работа',
            'g_tagcity':'город',
            'g_pay_to':'Оплачено до:',
            'g_tema':'Тема',
            'g_add':'Добавить',
            'g_edit':'Править',
            'g_delete':'Удалить',
            'g_notema':'-нет тем-',
            'g_temas':'-темы-',
            'g_tsel':'Цель',
            'g_for_online':'По списку онлайн',
            'g_for_writers':'По писателям',
            'g_for_matches':'По парам',
            'g_for_admirers':'По поклонникам',
            'g_for_favorites':'По фаворитам',
            'g_for_advanced':'По списку офлайн',
            'g_for_online_infinitely':'По списку онлайн (бесконечно)',
            'g_for_noanswered':'По не ответившим',
            'g_for_activedialog':'По активным диалогам',
            'g_for_contactlist':'По контакт-листу',
            'g_photos':'Фотки',
            'g_nophoto':'-без фотографии-',
            'g_upload_delete':'Загрузить / удалить',
            'g_upload':'-Загрузить-',
            'g_age_from':'Взраст от',
            'g_start_send':'Начать рассылку',
            'g_stop_send':'Остановить рассылку',
            'g_to':'до',
            'g_addidman':'Введите ID (можно несколько, через запятую)',
            'g_editwrite':'Отредактируйте запись:',
            'g_addtema':'Введите тему письма',
            'g_addnewtema':'Введите новую тему письма',
            'g_realydelletter':'Вы действительно хотите удалить письмо',
            'g_selecttemaletter':'Выберите тему для рассылки',
            'g_limitleterisfail':'На сегодня лимит рассылки исчерпан. Приходите завтра.',
            'g_addtextletter':'Введите текст письма!',
            'g_addpisalman':'Заполните писателей',
            'g_sending':'Рассылка',
            'g_alreadydend':'Отправлено',
            'g_waitsend':'ожидает',
            'g_unknown':'неизвестно',
            'g_quotaextended':'Локальное хранилище переполнено',
            'g_sendingstoped':'Рассылка остановлена',
            'g_sendinggo':'Идет рассылка',
            'g_sendingfinished':'Рассылка завершена',
            'g_gettest':'Получить 2 дня бесплатно',
            'g_notactivation':'У Вас закончились дни активации',

            'g_for_favorites':'Фаворитам',
            'g_for_platil':'Платящим',
            'g_tocountries':'По странам',
            'g_wait':'Подождите...',
            'g_error_link':'Вы хотите рассылать ссылку! Это запрещено!',
            'g_error_email':'Вы хотите рассылать Email! Это запрещено!',
            'g_addtextmessage':'Напишите сообщение!',
            'g_pusto':'- Пусто -',
            'g_all':'Все',
            'g_for_search':'Поиск',
            'g_nolistman':'Нечего рассылать',
            'g_clearhistory':'Очистить историю расслок',
            'g_clean_contact':'Очистить контакт-лист',
            'g_cleancookie':'Очистить куки',

            's_actualonline':'Актуальный Online',
            's_platilmanonline':'Платящих мужчин',
            's_back':"<- Назад",
            's_delselectmoreman':'* перед удалением выберите одного или несколько мужчин в списке',
            's_for_interest':'Интересующиеся',
            's_speed':'Скорость',
            's_slow':'Медленно',
            's_normal':'Нормально',
            's_fast':'Быстро',
            's_stop_send':'Стоп',
            's_pause_send':'Пауза',
            's_report_send':'Отчет приглашений',
            's_activechats':'Активные чаты',
            's_errorminmaxage':'Минимальный возраст не может превышать максимальный',
            's_':'',
        }
    };
    var WLANG={init_html:function(){$.each(lang,function(a,b){$('[lng="'+a+'"').text(b)})}};WLANG.init_html();
    var STAT={var_name:udata.name,var_site:"zolushka_chat",var_storage_id:function(){return localStorage[STAT.var_site+"storage_id_"+STAT.var_name]},init:function(){STAT.events();STAT.get_storage_srv()},events:function(){$("#payed").text(udata.date)},get_storage_srv:function(){STAT.var_storage_id()?SM({type:"set_storage_id",data:STAT.var_storage_id()}):$.post("http://wmidbot.com/ajax.php",{module:"statistics",event:"get_storage_invites",data:{girl:STAT.var_name,site:STAT.var_site}},function(a){null!=
    a.data&&(localStorage.setItem(STAT.var_site+"storage_id_"+a.data.girl_id,a.data.id),storage=JSON.parse(a.data.settings),SaveStorage(),SM({type:"set_storage_id",data:STAT.var_storage_id()}),STAT.set_settings_controls())})},set_storage_srv:function(a){a&&$.post("http://wmidbot.com/ajax.php",{module:"statistics",event:"set_storage_invites",data:{girl:STAT.var_name,json:a,site:STAT.var_site}},function(a){null!=a.data&&(localStorage.setItem(STAT.var_site+"storage_id_"+STAT.var_name,a.data),SaveStorage(),
        SM({type:"set_storage_id",data:STAT.var_storage_id()}))})},set_settings_controls:function(a){var b=!1;storage.af?af.val(storage.af):b=!0;storage.at?at.val(storage.at):b=!0;storage.text?text.val(storage.text):b=!0;storage.goal?goal.val(storage.goal):b=!0;b&&(storage.text=text.val(),storage.goal=goal.val(),storage.at=at.val(),storage.af=af.val(),SaveStorage());storage.black&&$.each(storage.black,function(a,b){$("<option>").text(b?b:a).val(a).appendTo(black)});af.change(function(){storage.af=parseInt($(this).val());
        storage.af>=parseInt(at.val())&&at.val(storage.af);SaveStorage()});at.change(function(){storage.at=parseInt($(this).val());storage.at<=parseInt(af.val())&&af.val(storage.at);SaveStorage()});goal.change(function(){storage.goal=$(this).val();SaveStorage()});if(a)return a()}},init=$("body").data("init"),storage=init.storage,black=$("#black"),af=$("#age-from"),at=$("#age-to"),text=$("#text"),goal=$("#goal"),start=$("#start"),stop=$("#stop"),Start=function(){STAT.set_storage_srv(storage);stop.show();start.hide();
        $("#text,#age-from,#age-to,#goal").prop("disabled",!0)},Stop=function(){start.show();stop.hide();$("#text,#age-from,#age-to,#goal").prop("disabled",!1)},SaveStorage=function(){SM({type:"save",storage:storage})};$("#blecklist").click(function(){$(".rightColumn").toggle();return!1});
    $("#addb").click(function(){var a=prompt(lang.g_addidman);null!==a&&($.each(a.split(/\D+/),function(a,c){0==black.find("[value="+c+"]").size()&&($("<option>").text(c).appendTo(black),black.val(c),storage.black[c]="")}),SaveStorage());return!1});
    $("#editb").click(function(){var a=$("#black :selected"),b=[];0<a.size()&&(a.each(function(){b.push($(this).val())}),b=prompt(lang.g_editwrite,b.join(", ")),null!==b&&(a.each(function(){delete storage.black[$(this).val()]}).remove(),$.each(b.split(/\D+/),function(a,b){0==black.find("[value="+b+"]").size()&&($("<option>").text(b).appendTo(black),black.val(b),storage.black[b]="")}),SaveStorage()));return!1});
    $("#delb").click(function(){$("#black :selected").each(function(){delete storage.black[$(this).val()]}).remove();SaveStorage();return!1});$("#emptychatlist").click(function(a){a.preventDefault();SM({type:"clean"},function(a){})});STAT.set_settings_controls();init.runned&&Start();start.click(function(){SM({type:"start"},function(a){a&&Start()})});stop.click(function(){SM({type:"stop"},function(a){a&&Stop()})});text.change(function(){storage.text=$(this).val();SaveStorage()});STAT.init();
//]]>
})(jQuery);