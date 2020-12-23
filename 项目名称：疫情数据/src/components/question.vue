<template>
    <div id="my_body">
        <div>
            <div id="head">
                <p>新型冠状病毒肺炎<span><img src="../assets/logo.jpg" alt=""> 健康医典</span></p>
                <p>又名：新冠肺炎、Novel Coronavirus Pneumonia，NCP、2019冠状病毒病、Corona Virus Disease 2019，COVID-19、新型冠状病毒感染的肺炎</p>
                <p>科室：传染科、发热门诊</p>
                <div id="doctor">
                    <div id="czh">
                        <img src="../assets/doctor1.jpg" alt="">
                        <div>
                            <p>陈志海
                                <button>审阅专家</button>
                                <button><img src="../assets/icon1.png" alt="" srcset=""> 医典专家团</button>
                            </p>
                            <p>北京地坛医院  主任医师</p> 
                            <p>国家卫生标准委员会传染病标准专业委员会委员</p>
                        </div>
                    </div>
                    <div id="jrm">
                        <img src="../assets/doctor2.jpg" alt="">
                        <div>
                            <p>蒋荣猛
                                <button>审阅专家</button>
                                <button><img src="../assets/icon1.png" alt="" srcset=""> 医典专家团</button>
                            </p>
                            <p>北京地坛医院  主任医师</p> 
                            <p>国家医院感染控制质控中心专家委员会委员、国家卫健委传染病专家咨询委员会成员</p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="my_doctor">
                <Row :space="9">
                    <Cell width="19" >
                        <div>
                            <Tabs class-name="h-tabs-default" :datas="param" v-model="selected"></Tabs>
                        </div>
                        <div class="modu1" v-show="selected=='module1'">
                            <span>概述</span>
                            <ul class="ullist">
                                <li>新型冠状病毒感染所致肺炎</li>
                                <li>起初发热、乏力、干咳，逐渐出现呼吸困难等</li>
                                <li>具备人传染人的能力，正确佩戴口罩加强防护</li>
                                <li>多数预后良好，少数病情危重，甚至可致死亡</li>
                            </ul>
                            <span class="subtitle0">疾病定义</span>
                            <p class="ptext">新型冠状病毒肺炎是一种急性感染性肺炎，其病原体是一种先前未在人类中发现的新型冠状病毒，即2019新型冠状病毒。2020年2月7日，国家卫健委决定将“新型冠状病毒感染的肺炎”暂命名为“新型冠状病毒肺炎”，简称“新冠肺炎”。2月11日，世界卫生组织（WHO）将其英文名称为Corona Virus Disease 2019（COVID-19）。2月22日，国家卫健委决定将“新型冠状病毒肺炎”英文名称修订为“COVID-19”，与世界卫生组织命名保持一致，中文名称保持不变。</p>
                            <p class="ptext">2020年1月30日，WHO宣布将新型冠状病毒肺炎疫情列为国际关注的突发公共卫生事件（PHEIC）。</p>
                            <p class="ptext">患者初始症状多为发热、乏力和干咳，并逐渐出现呼吸困难等严重表现。多数患者预后良好，部分严重病例可出现急性呼吸窘迫综合征或脓毒症休克，甚至死亡。目前，缺乏针对病原体的有效抗病毒药物，以隔离治疗、对症支持治疗为主。</p>
                            <span class="subtitle0">流行病学</span>
                            <p class="ptext">基于目前的流行病学调查，潜伏期1-14天，多为3-7天。潜伏期具有传染性，无症状感染者也可能成为传染源，人群普遍易感。</p>
                            <p class="ptext">经呼吸道飞沫和密切接触传播是主要的传播途径。由于在粪便及尿中可分离到新型冠状病毒，应注意粪便及尿对环境污染造成气溶胶或接触传播。在相对封闭的环境中长时间暴露于高浓度气溶胶情况下中存在经气溶胶传播的可能。密闭、不通风场所可能存在气溶胶传播风险，需加强预防和隔离处理。</p>
                            <ul class="ptext ullist">
                                <li>2019年12月，湖北省武汉市发现多起“不明原因肺炎”，随后的患者多有华南海鲜市场暴露史或家庭聚集现象；</li>
                                <li>2020年1月7日21时，研究人员在患者标本中检出一种新型冠状病毒；</li><li>1月10日24时，完成病原核酸检测；</li>
                                <li>1月12日，世界卫生组织（WHO）将造成武汉肺炎疫情的新型冠状病毒暂命名为2019新型冠状病毒（2019-nCoV）；</li>
                                <li>1月30日，WHO宣布将新型冠状病毒疫情列为国际关注的突发公共卫生事件。</li>
                                <li>2月7日，国家卫健委决定将“新型冠状病毒感染的肺炎”暂命名为“新型冠状病毒肺炎”，简称“新冠肺炎”。英文名称为“Novel Coronavirus Pneumonia”，简称“NCP”；</li>
                                <li>2月11日，WHO将由新型冠状病毒引发的疾病命名为2019冠状病毒病，英文名称为“Corona Virus Disease 2019”，简称“COVID-19”。</li>
                            </ul>
                            <span class="question0">患者最常问的问题</span>
                            <div>
                              <ul class="dbz">
                                  <li>人感染新型冠状病毒后会有什么症状？</li>
                                  <li>人感染新型冠状病毒后的症状严重程度取决于病毒的类型以及人体的免疫水平，常见的有发热、咳嗽、呼吸急促或呼吸困难，更严重时会导致急性呼吸窘迫综合征、脓毒性休克等，可导致患者死亡。</li>
                                  <li>新型冠状病毒可以在人与人之间传播吗？</li>
                                  <li>是的，新型冠状病毒是可以在人与人之间传播的，传播通常发生在在家庭、工作场所、人群密集区域或医院等。</li>
                                  <li>目前有针对新型冠状病毒的疫苗吗？</li>
                                  <li>没有，新发疾病可能需要较长时间才能研发出接种的疫苗。</li>
                                  <li>有针对新型冠状病毒的治疗方法吗？</li>
                                  <li>对于由新型冠状病毒感染引起的疾病，目前没有特效的治疗方法，临床治疗以对症支持治疗为主。</li>
                                  <li>医护人员会受到新型冠状病毒的威胁吗？</li>
                                  <li>是的。医护人员需要与患者密切接触，更容易受到新型冠状病毒的感染威胁。因此，世界卫生组织（WHO）建议医护人员加强自身的感染预防和控制措施。严格执行标准预防原则，做好个人防护、手卫生，最大可能避免医院感染。</li>
                                  <li>我该怎么做才能保护自己？</li>
                                  <li>由于该病目前尚无有效治疗方法，预防与隔离是最有效途径，尽量减少与感染或潜在感染患者接触的机会。首先要避免前往人群密集场所，在公共场所要戴口罩。其次要注意手卫生和饮食卫生，勤洗手、多饮水、避免疲劳、保证睡眠，家庭和工作环境保持多通风。如果出现发热、咳嗽症状，要注意咳嗽礼仪，要及时就医，前往医院途中，戴口罩。</li>
                              </ul>
                            </div>
                        </div>
                        <div class="modu1" v-show="selected=='module2'">
                            <span>病因</span>
                            <ul class="ullist">
                               <li>新型冠状病毒肺炎是一种新发急性传染性疾病。</li>
                               <li>主要是由2019新型冠状病毒（2019-nCoV）感染引起。<br></li>
                            </ul>
                            <span class="subtitle0">基本病因</span>
                            <p class="ptext">既往已知感染人的冠状病毒有6种，即HCoV-229E、HCoV-OC43、SARSr-CoV、HCoV-NL63、HCoV-HKU1和MERSr-CoV。</p>
                            <p class="ptext">新型冠状病毒（2019-nCov）属于β属的冠状病毒，属于第7种，其基因特征与SARSr-CoV和MERSr-CoV有明显区别。</p>
                            <span class="subtitle0">诱发因素</span>
                            <p class="ptext">老年人及有基础疾病者感染后病情较重。</p>

                        </div>
                        <div class="modu1" v-show="selected=='module3'">
                            <span>症状</span>
                            <p class="ptext">根据国家卫健委《新型冠状病毒感染的肺炎诊疗方案（试行第七版）》，重型、危重型患者病程中可为中低热，甚至无明显发热。轻型患者仅表现为低热、轻微乏力等，无肺炎表现。</p>
                            <span class="subtitle0">典型症状</span>
                            <ul class="ullist">
                                <li>以发热、乏力、干咳为主要表现；</li>
                                <li>少数患者伴有鼻塞、流涕、咽痛和腹泻等症状；</li>
                                <li>重症患者多在发病一周后出现呼吸困难和/或低氧血症，严重者快速进展为急性呼吸窘迫综合征、脓毒症休克、难以纠正的代谢性酸中毒和凝血功能障碍及多器官功能衰竭。<br></li>
                            </ul>
                        </div>
                        <div class="modu1" v-show="selected=='module4'">
                            <span>就医</span>
                            <p class="ptext">该病为急性感染，常在第一周病情逐步加重，如有以下情况请及时就医：</p>
                             <ul class="ullist" style="font-size:14px">
                                <li>近期出现不明原因发热、乏力、咳嗽等；</li>
                                <li>发病前两周内有武汉居住或旅行史；</li>
                                <li>发病前两周有与确诊患者密切接触史；</li>
                                <li>呈聚集性发病（2人及以上）。<br></li>
                            </ul>
                            <p class="ptext">就诊时医生可能会问如下问题来初步了解病史，患者可提前准备好相应的回答：</p>
                             <ul class="ullist" style="font-size:14px">
                                 <li>什么时候出现发热、咳嗽等症状？</li>
                                 <li>发病前去过哪些地方、接触过哪些人？</li>
                                 <li>身边是否有人有类似症状？</li>
                                 <li>是否有呼吸困难？</li>
                                 <li>有什么基础疾病？<br></li>
                            </ul>
                            <span class="subtitle0">诊断标准</span>
                            <p class="ptext">根据国家卫健委发布的《新型冠状病毒感染的肺炎诊疗方案（试行第七版）》：</p>
                            <span class="subtitle0">疑似病例</span>
                            <p class="ptext">结合下述流行病学史和临床表现综合分析：有流行病学史中的任何一条，且符合临床表现中的任意2条。无明确流行病学史的，符合临床表现中的3条。</p>
                            <span class="subtitle0">流行病学史</span>
                            <ul class="ullist">
                                 <li>发病前14天内有武汉市及周边地区，或其他有病例报告社区的旅行史或居住史；</li>
                                 <li>发病前14天内曾接触过来自武汉市及周边地区，或来自有病例报告社区的发热或有呼吸道症状的患者；</li>
                                 <li>发病前14天内与新型冠状病毒感染者（核酸检测阳性者）有接触史；</li>
                                 <li>聚集性发病。<br></li>
                            </ul>
                            <span class="subtitle0">临床表现</span>
                            <ul class="ullist">
                                 <li>发热/或呼吸道症状；</li>
                                 <li>具有上述肺炎影像学特征；</li>
                                 <li>发病早期白细胞总数正常或降低，或淋巴细胞计数减少。<br></li>
                            </ul>
                            <span class="subtitle0">临床分型</span><br><br>
                            <span class="sub2">轻型</span>
                            <p class="ptext">临床症状轻微，影像学未见肺炎表现。</p>
                            <span class="sub2">普通型</span>
                            <p class="ptext">具有发热、呼吸道等症状，影像学可见肺炎表现。</p>
                            <span class="sub2">重型</span>
                            <p class="ptext">成人符合下列任何一条：</p>
                            <ul class="ullist" style="font-size:14px">
                                 <li>呼吸窘迫，呼吸频次≥ 30 次/分；</li>
                                 <li>静息状态下，指氧饱和度 ≤ 93%；</li>
                                 <li>动脉血氧分压（PaO₂）/吸氧浓度（FiO₂）≤ 300 mmHg（1 mmHg = 0.133kPa），高海拔（海拔超过1000米）地区应根据以下公式对PaO2/FiO2进行校正：PaO2/FiO2 × [大气压(mmHg)/760]。</li>
                            </ul>
                            <p class="ptext">此外，肺部影像学显示24~48小时内病灶明显进展>50%者，按重型管理。</p>
                            <p class="ptext">儿童符合下列任何一条：</p>
                            <ul class="ullist" style="font-size:14px">
                                 <li>出现气促（＜2月龄，RR≥60次/分；2～12月龄，RR≥50次/分；1～5岁，RR≥40次/分；&gt;5岁，RR≥30次/分），除外发热和哭闹的影响；<br></li>
                                 <li>静息状态下氧饱和度≤92%；<br></li>
                                 <li>辅助呼吸（呻吟、鼻翼扇动、三凹征），发绀，间歇性呼吸暂停；出现嗜睡、惊厥；<br></li>
                                 <li>拒食或喂养困难，有脱水征。<br></li>
                            </ul>
                            <span class="sub2">危重型</span>
                            <p class="ptext">符合以下情况之一者：</p>
                            <ul class="ullist" style="font-size:14px">
                                <li>出现呼吸衰竭，且需要机械通气；</li>
                                <li>出现休克；</li>
                                <li>合并其他器官功能衰竭需 ICU 监护治疗。<br></li>
                            </ul>
                            <span class="sub2">重型、危重型临床预警指标</span>
                            <p class="ptext">成人重型、危重型临床预警指标：</p>
                            <ul class="ullist"  style="font-size:14px">
                                <li>外周血淋巴细胞进行性下降；<br></li>
                                <li>外周血炎症因子如IL-6、C-反应蛋白进行性上升；<br></li>
                                <li>乳酸进行性升高；<br></li>
                                <li>肺内病变在短期内迅速进展。<br></li>
                            </ul>
                            <p class="ptext">儿童重型、危重型临床预警指标：</p>
                            <ul class="ullist" style="font-size:14px">
                                <li>呼吸频率增快；<br></li>
                                <li>精神反应差、嗜睡；<br></li>
                                <li>乳酸进行性升高；<br></li>
                                <li>影像学显示双侧或多肺叶浸润、胸腔积液或短期内病变快速进展者；<br></li>
                                <li>3月龄以下的婴儿或有基础疾病（先天性心脏病、支气管肺发育不良、呼吸道畸形、异常血红蛋白、重度营养不良等）、有免疫缺陷或低下（长期使用免疫抑制剂）者。<br></li>
                            </ul>
                            <span class="subtitle0">就诊科室</span>
                            <p class="ptext">发热门诊、感染科、重症监护室。</p>
                            <span class="subtitle0">相关检查</span>
                            <span class="sub2">医生查体</span>
                            <p class="ptext">主要针对肺部进行相应检查，听诊呼吸音等。</p>
                            <span class="sub2">实验室检查</span>
                            <ul class="ullist">
                               <li>发病早期外周血白细胞总数正常或降低，淋巴细胞计数减少；</li>
                               <li>部分患者肝酶、乳酸脱氢酶（LDH）、肌酶和肌酸激酶等升高；</li>
                               <li>部分危重者可见肌钙蛋白增高；</li>
                               <li>多数患者C反应蛋白（CRP）和血沉升高、降钙素原正常；</li>
                               <li>严重者D-二聚体升高、外周血淋巴细胞进行性减少。<br></li>
                            </ul>
                            <span class="sub2">影像学检查</span>
                            <p class="ptext">早期呈现多发小斑片影及间质改变，以肺外带明显。进而发展为双肺多发磨玻璃影、浸润影，严重者可出现肺实变，胸腔积液少见。</p>
                            <span class="sub2">特殊检查</span>
                            <p class="ptext">病原体检测，采集咽拭子、痰液或下呼吸道分泌物标本，进行实时荧光RT-PCR，其结果为新型冠状病毒核酸检测阳性。或病原体基因测序提示与新型冠状病毒高度同源。为提高核酸检测阳性率，建议尽可能留取痰液，实施气管插管患者采集下呼吸道分泌物，标本采集后尽快送检。</p>
                            <span class="subtitle0">鉴别诊断</span>
                            <p class="ptext">医生将从多个方面进行详细检查进行判断：</p>
                            <ul class="ullist" style="font-size:14px">
                              <li>新型冠状病毒感染轻型表现需与其它病毒引起的上呼吸道感染相鉴别；</li>
                              <li>新型冠状病毒肺炎主要与流感病毒、腺病毒、呼吸道合胞病毒等其他已知病毒性肺炎及肺炎支原体感染鉴别，尤其是对疑似病例要尽可能采取包括快速抗原检测和多重PCR核酸检测等方法，对常见呼吸道病原体进行检测；</li>
                              <li>还要与非感染性疾病，如血管炎、皮肌炎和机化性肺炎等鉴别。</li>
                            </ul>


                           
                        </div>
                        <div class="modu1" v-show="selected=='module5'">
                            <span>治疗</span>
                            <p class="ptext">目前，缺乏针对病原体的有效抗病毒药物，以隔离治疗、对症支持治疗为主。</p>
                            <p class="ptext">根据国家卫健委发布的《新型冠状病毒感染的肺炎诊疗方案（试行第七版）》：对于重型、危重型病例，在对症治疗的基础上，积极防治并发症，治疗基础疾病，预防继发感染，及时进行器官功能支持。 采取以下方式进行治疗：</p>
                            <ul class="ullist" style="font-size:16px">
                              <li>呼吸支持：包括氧疗、高流量鼻导管氧疗或无创机械通气、有创机械通气和挽救治疗。挽救治疗针对严重ARDS患者，建议进行肺复张。在人力资源充足的情况下，每天应进行12小时以上的俯卧位通气。俯卧位通气效果不佳者，如条件允许，应尽快考虑体外膜肺氧合（ECMO）。</li>
                              <li>循环支持：充分液体复苏的基础上，改善微循环，使用血管活性药物，必要时进行血流动力学监测。进行无创或有创血流动力学监测，在救治过程中，注意液体平衡策略，避免过量和不足。</li>
                              <li>肾功能衰竭和肾替代治疗：除了查找肾功能损伤的原因外，对于肾功能衰竭的重症患者可选择连续性肾替代治疗（CRRT）。</li>
                              <li>康复者血浆治疗：建议适用于病情进展较快、重型和危重型患者。用法用量参考《新冠肺炎康复者恢复期血浆临床治疗方案（试行第一版）》。</li>
                              <li>血液净化治疗：血液净化系统包括血浆置换、吸附、灌流、血液/血浆滤过等，能清除炎症因子，从而减轻炎症反应对机体的损伤，可用于重型、危重型患者细胞因子风暴的早中期的救治。</li>
                              <li>其他治疗措施：儿童重型、危重型病例可酌情考虑使用静脉滴注丙种球蛋白。妊娠合并重型或危重型患者应积极终止妊娠，剖腹产为首选。患者常存在焦虑恐惧情绪，应加强心理疏导。<br></li>
                            </ul>
                            <span class="subtitle0">急性期治疗</span>
                            <p class="ptext">有缺氧、呼吸困难的患者，应及时给予氧疗（如鼻导管吸氧、面罩吸氧），必要时给予无创或有创呼吸机支持。</p>
                            <span class="subtitle0">一般治疗</span>
                            <ul class="ullist" style="font-size:16px">
                             <li>卧床休息，加强支持治疗，保证充分热量；注意水、电解质平衡，维持内环境稳定；密切监测生命体征、指氧饱和度等。</li>
                             <li>根据病情监测血常规、尿常规、C-反应蛋白（CRP）、生化指标（肝酶、心肌酶、肾功能等）、凝血功能，必要时行动脉血气分析，复查胸部影像学。</li>
                             <li>根据氧饱和度的变化，及时给予有效氧疗措施，包括鼻导管、面罩给氧，必要时经鼻高流量氧疗、无创或有创机械通气等。</li>
                             <li>有条件可采用氢氧混合吸入气（H<span style="vertical-align: sub;">2</span>/O2 : 66.6%/33.3%）治疗。</li>
                            </ul>
                            <span class="subtitle0">药物治疗</span>
                            <ul class="ullist" style="font-size:16px">
                             <li>抗病毒治疗：可试用α-干扰素雾化吸入、洛匹那韦/利托那韦、利巴韦林、磷酸氯喹和阿比多尔，利巴韦林建议与干扰素或洛匹那韦/利托那韦联合应用。要注意上述药物的不良反应、禁忌症以及与其他药物的相互作用等问题。</li>
                             <li>试用药物的疗程均不超过10天。建议在临床应用中进一步评价目前所试用药物的疗效。不建议同时应用3种及以上抗病毒药物，出现不可耐受的毒副作用时应停止使用相关药物。</li>
                             <li>抗菌药物治疗：避免盲目或不恰当使用抗菌药物，尤其是联合使用广谱抗菌药物。</li>
                             <li>其他：根据患者呼吸困难程度、胸部影像学进展情况，在医生指导下酌情短期内（3～5 天）使用糖皮质激素。</li>
                             <li>对孕产妇患者的治疗应考虑妊娠周数，尽可能选择对胎儿影响较小的药物，以及是否终止妊娠后再进行治疗的问题，并知情告知。</li>
                            </ul>
                            <span class="subtitle0">中医治疗</span>
                            <p class="ptext">该疾病的中医治疗暂时缺乏循证医学证据支持。根据国家卫健委发布的《新型冠状病毒感染的肺炎诊疗方案（试行第六版）》，各地可根据病情、当地气候特点以及不同体质等情况，可参照推荐的方案进行辨证论治。建议到正规医疗机构，在医师指导下治疗。</p>

                        </div>
                        <div class="modu1" v-show="selected=='module6'">
                            <span>预后</span>
                            <p class="ptext">从目前收治的病例情况看，多数患者预后良好，少数患者病情危重。老年人和有慢性基础疾病者预后较差。患有新型冠状病毒肺炎的孕产妇临床过程与同龄患者相近。儿童病例症状相对较轻。</p>
                            <span class="subtitle0">后遗症</span>
                            <p class="ptext">根据《2019新型冠状病毒肺炎呼吸康复指导意见》：</p>
                            <ul class="ullist" style="font-size:16px">
                                <li>轻症隔离及普通型出院患者：多数患者肺功能损害轻微或无持续残留的肺功能问题，较少产生身体功能障碍。</li>
                                <li>重型/危重型出院患者：可能会有全身虚弱、呼吸急促导致身体功能受限，肺功能表现为限制性通气障碍，与胸部CT的检查显示的肺纤维化改变一致，此改变可能持续存在。<br></li>
                            </ul>
                            <p class="ptext">以上所述新型冠状病毒肺炎后遗症尚需要大量病例总结和观察。</p>
                            <span class="subtitle0">康复</span>
                            <p class="ptext">个别重症患者可能会有肺纤维化，康复需要较长时间。</p>
                            <span class="subtitle0">并发症</span>
                            <p class="ptext">重症病例患者可合并急性呼吸窘迫综合征、脓毒症休克、难以纠正的代谢性酸中毒以及凝血功能障碍等。</p>


                        </div>
                        <div class="modu1" v-show="selected=='module7'">
                            <span>日常</span>
                            <p class="ptext">新型冠状病毒肺炎目前缺乏有效治疗方法。日常生活管理重在预防感染和对疑似及确诊病例进行有效隔离。</p>
                            <span class="subtitle0">家庭护理</span>
                            <p class="ptext">新型冠状病毒肺炎存在家庭聚集现象，有疑似症状则及时至传染科就诊，需要在具备有效隔离条件和防护条件的医院隔离治疗。</p>
                            <span class="subtitle0">日常生活管理</span>
                            <span class="sub2">饮食</span>
                            <ul class="ullist" style="font-size:16px">
                                <li>不食用野生动物（即野味），禽、肉、蛋要充分煮熟后食用；</li>
                                <li>注意营养、避免偏食、保证摄入食物多样化，尤其是新鲜蔬菜、水果等；</li>
                                <li>养成良好饮食习惯，按时按量用餐，避免暴饮暴食。<br></li>
                            </ul>
                            <span class="sub2">运动</span>
                            <p class="ptext">积极锻炼，控制体重。此外，适度运动也有助于提高免疫力。</p>
                            <span class="sub2">生活方式</span>
                            <ul class="ullist" style="font-size:16px">
                                <li>戒烟、限酒；</li>
                                <li>保证充足睡眠、注意休息、避免熬夜；</li>
                                <li>关注心理健康，注意缓解紧张情绪、减轻心理压力。<br></li>
                            </ul>
                            <span class="subtitle0">日常病情监测</span>
                            <p class="ptext">注意监测体温，如有发热、乏力、咳嗽等症状及时就诊。如发病前两周内有疫源地（武汉市）居住或旅行史、有与确诊或疑似患者接触病史，或者有集体发病表现，需及时就诊并主动隔离。根据《新型冠状病毒肺炎诊疗方案（试行第六版）》出院后注意事项如下：</p>
                            <ul class="ullist" style="font-size:16px">
                               <li>定点医院要做好与患者居住地基层医疗机构间的联系，共享病历资料，及时将出院患者信息推送至患者辖区或居住地居委会和基层医疗卫生机构。<br></li>
                               <li>患者出院后，因恢复期机体免疫功能低下，有感染其它病原体风险，建议应继续进行14天自我健康状况监测，佩戴口罩，有条件的居住在通风良好的单人房间，减少与家人的近距离密切接触，分餐饮食，做好手卫生，避免外出活动。<br></li>
                               <li>建议在出院后第2周、第4周到医院随访、复诊。<br></li>
                            </ul>
                            <span class="subtitle0">特殊注意事项</span>
                            <ul class="ullist" style="font-size:16px">
                                <li>潜伏期1-14天，多为3-7天。潜伏期具有传染性，无症状感染者也可能成为传染源。如有确诊或疑似患者接触病史，即使暂时没有发热等症状，也需要主动隔离。</li>
                                <li>解除隔离需要体温恢复正常3天以上，呼吸道症状明显好转，连续2次（至少间隔1天）病原体检测阴性。<br></li>
                            </ul>
                            <span class="subtitle0">预防</span>
                            <p class="ptext">在传染病爆发流行时，采取的措施包括针对病原体、易感人群、传播途径和疫源地等方面的措施。</p>
                            <p class="ptext">新型冠状病毒肺炎暂时没有有效的疫苗，做好个人防护是最切实可行的办法，包括不要去人群聚集处、勤洗手、多饮水、注意休息等。</p>
                            <p class="ptext">具体预防手段如下：</p>
                            <ul class="ullist" style="font-size:16px">
                                <li>尽量减少外出，不要去人群聚集处，避免近距离接触任何有感冒或流感样症状的人；</li><li>外出前往公共场所、就医和乘坐交通工具时，注意佩戴医用外科口罩或N95口罩；</li><li>不要接触、购买和食用野生动物（即野味），避免在未加防护的情况下接触野生动物和家禽家畜；</li><li>注意手卫生，勤洗手，使用洗手液或肥皂，流水洗手，或使用含酒精成分的免洗洗手液；</li><li>打喷嚏或咳嗽时不要用手去捂，要用手肘部或纸巾遮住口、鼻；</li><li>居室及工作场所保持清洁，勤开窗，多保持通风状态；</li><li>注意多喝水、多休息、避免熬夜、适度运动，以提高个体免疫能力；注意营养、合理饮食，肉类、禽类和蛋类要充分煮熟后食用；</li><li>准备常用物资，如体温计、一次性口罩、家庭用消毒用品等。</li>
                            </ul>


                            <p class="ptext"></p>
                            <p class="ptext"></p>
                            <p class="ptext"></p>
                            <p class="ptext"></p>
                        </div>
                        <div class="modu1" v-show="selected=='module8'">
                            <span>图解</span>
                            <img src="../assets/jie.png" alt="">
                        </div>
                    </Cell>
                    <Cell width="5" >
                        <div id="read">
                            <h1>相关阅读</h1>
                            <ul>
                                <li>国庆旅游期间如何防疫？</li><br>
                                <li>秋冬季节疫情会反复吗？</li>
                            </ul>
                        </div>
                    </Cell>
                </Row>
            </div>
        </div>
    </div>
        
    
</template>
<style>
#my_body{
    /* height:800px; */
    background: #f8f8f8;
    color:#fff;
}
#head{
    background: #10aeb5;
    width:100%;height:300px;
    margin:0 auto;
    padding-left:200px;
    padding-right:200px;
    font-weight:normal;
    font-size:36px;
    padding-top:30px;
    padding-bottom:50px;
}
#head>p:nth-child(1)>span{
    float:right;
    font-size:25px;
}
span>img{
    width:20px;height:20px;
}
#head>p:nth-child(1){
    margin-top:0;
    margin-bottom:15px;
}
#head>p:nth-child(2),p:nth-child(3){
    margin-top:0px;
    margin-bottom:5px;
    font-size:14px;
}
#doctor{
    position: relative;
}
#czh,#jrm{
    margin-top:20px;
    position: relative;
    float: left;
}
#czh{
    margin-right:200px;
}
#czh>img,#jrm>img{
    width:40px;height:40px;
    margin-right:10px;
    border-radius: 50%;
    float:left;
}
#czh>div,#jrm>div{
    font-size:14px;
    float:left;
}
#czh>div>p,#jrm>div>p{
    margin-top:0px;
    margin-bottom:5px;
}
#czh>div>p>button,#jrm>div>p>button{
    line-height:15px;
    font-size:8px;   
    border-radius:15px ;
    background:#fff;
}
#czh>div>p>button:nth-child(1),#jrm>div>p>button:nth-child(1){
    width:55px;
    color:rgb(150, 94, 214);
    border:1px solid rgb(150, 94, 214);
    padding: 0 2px;
}
#czh>div>p>button:nth-child(2),#jrm>div>p>button:nth-child(2){
    width:85px;
    color:rgb(62, 221, 168);
    border:1px solid rgb(62, 221, 168);
    line-height:15px;
    margin-left:10px;
}
#czh>div>p>button:nth-child(2)>img,#jrm>div>p>button:nth-child(2)>img{
    width:15px;height:15px;
    /* margin-left:-3px; */
    /* padding-top:0px; */
    float:left;
}
#my_doctor{
    width:70%;
    margin:20px auto;
    color:rgba(0, 0, 0, 0.555);
    font-size:18px;
}
.h-row>div>div{
    background:#fff;
}
#read{
    padding:10px 10px;
}
#read>h1{
    font-size:18px;
    color:rgba(0, 0, 0, 0.836);
    font-weight:normal;
    margin-bottom:5px;
}
#read>ul>li{
    border-bottom:1px solid rgb(241, 237, 238);
    font-size:14px;
    color:rgba(0, 0, 0, 0.836);
}
#my_body .ullist{
    list-style: disc;
    margin-left: 0px;
    font-size: 18px;
    padding-bottom: 20px;
    border-bottom: 1px solid #ddd;
    list-style-position: inside;
    color: #555;
}
#my_body .modu1{
    padding: 40px;
}
#my_body .modu1 span:nth-child(1){
    display: inline-block;
    font-size: 28px;
    margin-bottom: 10px;
    color: #333;
}
#my_body .modu1 .subtitle0{
    display: inline-block;
    font-size: 22px;
    margin-top: 20px;
    color: #333;
    font-weight: bold;
}
#my_body .modu1 .ptext{
    color: #333;
    font-size: 16px;
}
#my_body .question0{
    display: inline-block;
    color: #333;
    font-size: 16px;
    padding: 20px 0;
}

#my_body .dbz li{
    padding-left: 25px ;

}
#my_body .dbz li:nth-child(odd){
    background: url(../assets/answer.85140015.png) no-repeat 0px 0px;
    background-size:25px;
    margin-bottom: 15px;
    color: #333;
    font-size: 17px;
}
#my_body .dbz li:nth-child(even){
    background: url(../assets/question.654026bd.png) no-repeat 0px 0px;
    background-size:25px;
    margin-bottom: 50px;
    font-size: 14px;
    border-bottom: 1px solid #eee;
    padding-bottom: 20px;

}
.sub2{
    font-size: 18px;
    font-weight: bold;
    display: inline-block;
    color: #333;
    margin-left: 20px;
}
</style>
<script>
export default {
    data() {
        return {
        param: {
            module1: '概述',
            module2: '病因',
            module3: '症状',
            module4: '就医',
            module5: '治疗',
            module6: '预后',
            module7: '日常',
            module8: '图解',
        },
        selected: 'module1'
        };
    },
    methods: {
    },
    watch:{
        // selected(v){
        //       this.$Message(`切换到${this.param[`${v}`]}`)
        // }
    }
}
</script>