/* Кнопка Twitch */ Lampa.SettingsApi.addParam({ component: 'Multi_Menu_Component', param: { name: 'Twitch', type: 'trigger', //доступно select,input,trigger,title,static default: false }, field: { name: 'Раздел Twitch', //Название подпункта меню description: 'Добавляет Twitch в главном меню' //Комментарий к подпункту }, onChange: function(value) { //Действия при изменении подпункта if(Lampa.Storage.field('Twitch') == false) { $('#TwitchButton').addClass('hide'); } if(Lampa.Storage.field('Twitch') == true) { $('#TwitchButton').removeClass('hide'); } //Lampa.Settings.update(); } }); /* End Кнопка Twitch */



/* Кнопка Twitch */ var TwitchSVG = '' var twitchmenu = $(''); 
$('.menu .menu__list').eq(0).append(twitchmenu) if(Lampa.Storage.field('Twitch') == true) { $('#TwitchButton').removeClass('hide'); } twitchmenu.on('hover:enter', function() { if (Lampa.Platform.is('webos')) { window.open('https://webos.tv.twitch.tv', '_blank'); } 
                                                                                                                                                                                   if (Lampa.Platform.is('orsay')) { window.open('https://fgl27.github.io/SmartTwitchTV/release/index.html', '_blank'); } 
                                                                                                                                                                                   if (Lampa.Platform.is('tizen')) { window.open('https://tizen.tv.twitch.tv', '_blank'); } 
                                                                                                                                                                                   if (Lampa.Platform.is('android')) { window.open('https://android.tv.twitch.tv', '_blank');  }) 
