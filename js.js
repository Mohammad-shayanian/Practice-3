function f1(){
                var body_table = "";
                var all_table = "";
                var rd_day =[""];
                var mode_day =[""];
                var mode_day_per =[""];
                var rd_taghaza =[""];
                var taghaza =[""];
                var income =[""];            // درامد فروش 1 روز
                var income_all = 0;          // درآمد فروش همه روزها
                var lost_profit =[""];       // سود از دست رفته بخاطر فزونی تقاضا در 1 روز
                var lost_profit_all = 0;     // سود از دست رفته بخاطر فزونی تقاضا در همه روزها
                var sell_tailings =[""];     // سود حاصل از فروش روزنامه باطله در 1 روز
                var sell_tailings_all = 0;   // سود حاصل از فروش روزنامه باطله در همه روزها
                var benefit  =[""];          // سود روزانه
                var benefit_all = 0;         // سود همه روزها
                var i;
                for (i = 1; i <= 20; i++)
                {
                    rd_day[i] = 00 + Math.floor(Math.random() * 99);
                    if (rd_day[i] >= 1 & rd_day[i] <= 35){
                        mode_day[i] = "good";
                        mode_day_per[i] = "خوب";
                    }
                    else if (rd_day[i] >= 36 & rd_day[i] <= 80){
                        mode_day[i] = "middle";
                        mode_day_per[i] = "متوسط";
                    }
                    else if (rd_day[i] >= 81 & rd_day[i] <= 99){
                        mode_day[i] = "bad";
                        mode_day_per[i] = "بد";
                    }
                    else if (rd_day[i] == 0){
                        mode_day[i] = "bad";
                        mode_day_per[i] = "بد";
                    }
                    
                    rd_taghaza[i] = 00 + Math.floor(Math.random() * 99);
                    
                    if (mode_day[i] == "bad")
                    {
                        if (rd_taghaza[i] >= 1 & rd_taghaza[i] <= 44)
                        {
                            taghaza[i] = 40;
                        }
                        else if (rd_taghaza[i] >= 45 & rd_taghaza[i] <= 66)
                        {
                            taghaza[i] = 50;
                        }
                        else if (rd_taghaza[i] >= 67 & rd_taghaza[i] <= 82)
                        {
                            taghaza[i] = 60;
                        }
                        else if (rd_taghaza[i] >= 83 & rd_taghaza[i] <= 94)
                        {
                            taghaza[i] = 70;
                        }
                        else if (rd_taghaza[i] >= 95 & rd_taghaza[i] <= 99)
                        {
                            taghaza[i] = 80;
                        }
                        else if (rd_taghaza[i] == 0)
                        {
                            taghaza[i] = 80;
                        }
                    }

                    if (mode_day[i] == "middle")
                    {
                        if (rd_taghaza[i] >= 1 & rd_taghaza[i] <= 10)
                        {
                            taghaza[i] = 40;
                        }
                        else if (rd_taghaza[i] >= 11 & rd_taghaza[i] <= 28)
                        {
                            taghaza[i] = 50;
                        }
                        else if (rd_taghaza[i] >= 29 & rd_taghaza[i] <= 68)
                        {
                            taghaza[i] = 60;
                        }
                        else if (rd_taghaza[i] >= 69 & rd_taghaza[i] <= 88)
                        {
                            taghaza[i] = 70;
                        }
                        else if (rd_taghaza[i] >= 89 & rd_taghaza[i] <= 96)
                        {
                            taghaza[i] = 80;
                        }
                        else if (rd_taghaza[i] >= 97 & rd_taghaza[i] <= 99)
                        {
                            taghaza[i] = 90;
                        }
                        else if (rd_taghaza[i] == 0)
                        {
                            taghaza[i] = 90;
                        }
                    }

                    if (mode_day[i] == "good")
                    {
                        if (rd_taghaza[i] >= 1 & rd_taghaza[i] <= 3)
                        {
                            taghaza[i] = 40;
                        }
                        else if (rd_taghaza[i] >= 4 & rd_taghaza[i] <= 8)
                        {
                            taghaza[i] = 50;
                        }
                        else if (rd_taghaza[i] >= 9 & rd_taghaza[i] <= 23)
                        {
                            taghaza[i] = 60;
                        }
                        else if (rd_taghaza[i] >= 24 & rd_taghaza[i] <= 43)
                        {
                            taghaza[i] = 70;
                        }
                        else if (rd_taghaza[i] >= 44 & rd_taghaza[i] <= 78)
                        {
                            taghaza[i] = 80;
                        }
                        else if (rd_taghaza[i] >= 79 & rd_taghaza[i] <= 93)
                        {
                            taghaza[i] = 90;
                        }
                        else if (rd_taghaza[i] >= 94 & rd_taghaza[i] <= 99)
                        {
                            taghaza[i] = 100;
                        }
                        else if (rd_taghaza[i] == 0)
                        {
                            taghaza[i] = 100;
                        }
                    }                       
                    if (taghaza[i] <= 70){
                        income[i] = taghaza[i] * 20;
                        lost_profit[i] = 0;
                        sell_tailings[i] = (70 - taghaza[i]) * 2;
                    }
                    else if (taghaza[i] >= 80){
                        income[i] = 1400;
                        lost_profit[i] = (taghaza[i] - 70) *7;
                        sell_tailings[i] = 0;
                    }
                    benefit[i] = income[i] - (70 * 13) - lost_profit[i] + sell_tailings[i];                 
                    income_all = income_all + income[i];                        // درآمد فروش همه روزها
                    lost_profit_all = lost_profit_all + lost_profit[i];         // سود از دست رفته بخاطر فزونی تقاضا در همه روزها
                    sell_tailings_all = sell_tailings_all + sell_tailings[i];   // سود حاصل از فروش روزنامه باطله در همه روزها
                    benefit_all = benefit_all + benefit[i];                     // سود همه روزها

                    // **************************** Table ************************
                    var header_table = "<caption>جدول شبیه سازی برای خرید 70 روزنامه</caption><tr><th>سود روزانه</th><th>درآمد ناشی از فروش به قیمت باطله</th><th>سود از دست رفته به خاطر فزونی تقاضا</th><th>درآمد حاصل از فروش</th><th>تقاضا</th><th>ارقام تصادفی برا تقاضا</th><th>نوع روز</th><th>ارقام تصادفی برای تعیین نوع روز</th><th>روز</th></tr>";
                    var row_col_table;
                    var footer_table;
                    row_col_table = "<tr><td>" 
                    + benefit[i] + "</td><td>" 
                    + sell_tailings[i] + "</td><td>" 
                    + lost_profit[i]  + "</td><td>"
                    + income[i]  + "</td><td>"
                    + taghaza[i]  + "</td><td>"
                    + rd_taghaza[i]  + "</td><td>"
                    + mode_day_per[i]  + "</td><td>"
                    + rd_day[i]  + "</td><td>"
                    + i  + "</td></tr>";
                    body_table = body_table + row_col_table ;
                }               
                
                footer_table ="<tr><td>" + benefit_all + "</td></td><td>" + sell_tailings_all + "</td><td>" + lost_profit_all + "</td><td>" + income_all + "</td><td>-</td><td>-</td><td></td><td> - </td><td>مجموع</td></tr>";
                all_table= header_table + body_table + footer_table;
                var table = document.getElementById("table").innerHTML = all_table;
            }
