# RealmsMainScreen

**Package:** `com.mojang.realmsclient`
**Type:** class
**Extends:** `RealmsScreen`
**Side:** 🖥️ Client
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Methods

### RealmsMainScreen

```java
public RealmsMainScreen(Screen p_86315_)
```

**Parameters:**

- `p_86315_` (`Screen`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### init

```java
public void init()
```

### isSnapshot

```java
public static boolean isSnapshot()
```

**Returns:** `public static boolean`

### repositionElements

```java
protected void repositionElements()
```

### onClose

```java
public void onClose()
```

### updateLayout

```java
private void updateLayout()
```

**Returns:** `private void`

### updateLayout

```java
private void updateLayout(RealmsMainScreen.LayoutState p_294474_)
```

**Parameters:**

- `p_294474_` (`RealmsMainScreen.LayoutState`)

**Returns:** `private void`

### createLayout

```java
private HeaderAndFooterLayout createLayout(RealmsMainScreen.LayoutState p_295052_)
```

**Parameters:**

- `p_295052_` (`RealmsMainScreen.LayoutState`)

**Returns:** `private HeaderAndFooterLayout`

### createHeader

```java
private Layout createHeader()
```

**Returns:** `private Layout`

### createFooter

```java
private Layout createFooter(RealmsMainScreen.LayoutState p_294561_)
```

**Parameters:**

- `p_294561_` (`RealmsMainScreen.LayoutState`)

**Returns:** `private Layout`

### createNoRealmsContent

```java
private LinearLayout createNoRealmsContent()
```

**Returns:** `private LinearLayout`

### updateButtonStates

```java
void updateButtonStates()
```

### shouldPlayButtonBeActive

```java
boolean shouldPlayButtonBeActive(RealmsServer p_86563_)
```

**Parameters:**

- `p_86563_` (`RealmsServer`)

**Returns:** `boolean`

### shouldRenewButtonBeActive

```java
private boolean shouldRenewButtonBeActive(RealmsServer p_86595_)
```

**Parameters:**

- `p_86595_` (`RealmsServer`)

**Returns:** `private boolean`

### shouldConfigureButtonBeActive

```java
private boolean shouldConfigureButtonBeActive(RealmsServer p_86620_)
```

**Parameters:**

- `p_86620_` (`RealmsServer`)

**Returns:** `private boolean`

### shouldLeaveButtonBeActive

```java
private boolean shouldLeaveButtonBeActive(RealmsServer p_86645_)
```

**Parameters:**

- `p_86645_` (`RealmsServer`)

**Returns:** `private boolean`

### tick

```java
public void tick()
```

### refreshPendingInvites

```java
public static void refreshPendingInvites()
```

**Returns:** `public static void`

### refreshServerList

```java
public static void refreshServerList()
```

**Returns:** `public static void`

### debugRefreshDataFetchers

```java
private void debugRefreshDataFetchers()
```

**Returns:** `private void`

### initDataFetcher

```java
private DataFetcher.Subscription initDataFetcher(RealmsDataFetcher p_238836_)
```

**Parameters:**

- `p_238836_` (`RealmsDataFetcher`)

**Returns:** `private DataFetcher.Subscription`

### callRealmsClient

```java
 callRealmsClient(p_304053_ -> { this.notifications.clear()
```

**Parameters:**

- `this.notifications.clear(` (`p_304053_ -> {`)

**Returns:** ``

### markNotificationsAsSeen

```java
private void markNotificationsAsSeen(Collection<RealmsNotification> p_304698_)
```

**Parameters:**

- `p_304698_` (`Collection<RealmsNotification>`)

**Returns:** `private void`

### callRealmsClient

```java
 callRealmsClient(p_274625_ -> { p_274625_.notificationsSeen(list)
```

**Parameters:**

- `p_274625_.notificationsSeen(list` (`p_274625_ -> {`)

**Returns:** ``

### callRealmsClient

```java
<T> private static <T> void callRealmsClient(RealmsMainScreen.RealmsCall<T> p_275561_, Consumer<T> p_275686_)
```

**Parameters:**

- `p_275561_` (`RealmsMainScreen.RealmsCall<T>`)
- `p_275686_` (`Consumer<T>`)

**Returns:** `private static <T> void`

### RuntimeException

```java
throw new RuntimeException()
```

**Returns:** `throw new`

### refreshListAndLayout

```java
private void refreshListAndLayout()
```

**Returns:** `private void`

### addListEntriesForNotification

```java
private boolean addListEntriesForNotification(RealmsNotification p_304511_)
```

**Parameters:**

- `p_304511_` (`RealmsNotification`)

**Returns:** `private boolean`

### pingRegions

```java
private void pingRegions()
```

**Returns:** `private void`

### getOwnedNonExpiredRealmIds

```java
private List<Long> getOwnedNonExpiredRealmIds()
```

**Returns:** `private List<Long>`

### onRenew

```java
private void onRenew(RealmsServer p_193500_)
```

**Parameters:**

- `p_193500_` (`RealmsServer`)

**Returns:** `private void`

### configureClicked

```java
private void configureClicked(RealmsServer p_86657_)
```

**Parameters:**

- `p_86657_` (`RealmsServer`)

**Returns:** `private void`

### leaveClicked

```java
private void leaveClicked(RealmsServer p_86670_)
```

**Parameters:**

- `p_86670_` (`RealmsServer`)

**Returns:** `private void`

### leaveServer

```java
private void leaveServer(RealmsServer p_193495_)
```

**Parameters:**

- `p_193495_` (`RealmsServer`)

**Returns:** `private void`

### run

```java
public void run()
```

### dismissNotification

```java
void dismissNotification(UUID p_275349_)
```

**Parameters:**

- `p_275349_` (`UUID`)

### resetScreen

```java
public void resetScreen()
```

**Returns:** `public void`

### refreshServerList

```java
 refreshServerList()
```

**Returns:** ``

### getNarrationMessage

```java
public Component getNarrationMessage()
```

**Returns:** `Component`

### render

```java
public void render(GuiGraphics p_282736_, int p_283347_, int p_282480_, float p_283485_)
```

**Parameters:**

- `p_282736_` (`GuiGraphics`)
- `p_283347_` (`int`)
- `p_282480_` (`int`)
- `p_283485_` (`float`)

### openTrialAvailablePopup

```java
private void openTrialAvailablePopup()
```

**Returns:** `private void`

### play

```java
public static void play(RealmsServer p_86516_, Screen p_86517_)
```

**Parameters:**

- `p_86516_` (`RealmsServer`)
- `p_86517_` (`Screen`)

**Returns:** `public static void`

### play

```java
 play()
```

**Returns:** ``

### play

```java
public static void play(RealmsServer p_305964_, Screen p_305959_, boolean p_306296_)
```

**Parameters:**

- `p_305964_` (`RealmsServer`)
- `p_305959_` (`Screen`)
- `p_306296_` (`boolean`)

**Returns:** `public static void`

### upgradeRealmAndPlay

```java
 upgradeRealmAndPlay()
```

**Returns:** ``

### confirmToPlay

```java
private static void confirmToPlay(RealmsServer p_305792_, Screen p_306263_, Component p_305782_, Component p_306311_, Component p_306238_)
```

**Parameters:**

- `p_305792_` (`RealmsServer`)
- `p_306263_` (`Screen`)
- `p_305782_` (`Component`)
- `p_306311_` (`Component`)
- `p_306238_` (`Component`)

**Returns:** `private static void`

### refreshServerList

```java
 refreshServerList()
```

**Returns:** ``

### upgradeRealmAndPlay

```java
private static void upgradeRealmAndPlay(RealmsServer p_350306_, Screen p_351001_)
```

**Parameters:**

- `p_350306_` (`RealmsServer`)
- `p_351001_` (`Screen`)

**Returns:** `private static void`

### confirmToPlay

```java
 confirmToPlay()
```

**Returns:** ``

### getVersionComponent

```java
public static Component getVersionComponent(String p_307541_, boolean p_307256_)
```

**Parameters:**

- `p_307541_` (`String`)
- `p_307256_` (`boolean`)

**Returns:** `public static Component`

### getVersionComponent

```java
return getVersionComponent(p_307256_ ? -8355712 : -2142128)
```

**Parameters:**

- `-2142128` (`p_307256_ ? -8355712 :`)

**Returns:** `return`

### getVersionComponent

```java
public static Component getVersionComponent(String p_307429_, int p_307536_)
```

**Parameters:**

- `p_307429_` (`String`)
- `p_307536_` (`int`)

**Returns:** `public static Component`

### isSelfOwnedServer

```java
static boolean isSelfOwnedServer(RealmsServer p_86684_)
```

**Parameters:**

- `p_86684_` (`RealmsServer`)

**Returns:** `static boolean`

### isSelfOwnedNonExpiredServer

```java
private boolean isSelfOwnedNonExpiredServer(RealmsServer p_86689_)
```

**Parameters:**

- `p_86689_` (`RealmsServer`)

**Returns:** `private boolean`

### renderEnvironment

```java
private void renderEnvironment(GuiGraphics p_294591_, String p_295050_, int p_294351_)
```

**Parameters:**

- `p_294591_` (`GuiGraphics`)
- `p_295050_` (`String`)
- `p_294351_` (`int`)

**Returns:** `private void`

### AvailableSnapshotEntry

```java
public AvailableSnapshotEntry(RealmsServer p_306154_)
```

**Parameters:**

- `p_306154_` (`RealmsServer`)

**Returns:** `public`

### render

```java
public void render(GuiGraphics p_305850_, int p_305808_, int p_305963_, int p_306050_, int p_306209_, int p_305982_, int p_306247_, int p_306293_, boolean p_306089_, float p_306015_)
```

**Parameters:**

- `p_305850_` (`GuiGraphics`)
- `p_305808_` (`int`)
- `p_305963_` (`int`)
- `p_306050_` (`int`)
- `p_306209_` (`int`)
- `p_305982_` (`int`)
- `p_306247_` (`int`)
- `p_306293_` (`int`)
- `p_306089_` (`boolean`)
- `p_306015_` (`float`)

### mouseClicked

```java
public boolean mouseClicked(double p_306312_, double p_306107_, int p_306043_)
```

**Parameters:**

- `p_306312_` (`double`)
- `p_306107_` (`double`)
- `p_306043_` (`int`)

**Returns:** `boolean`

### keyPressed

```java
public boolean keyPressed(int p_306133_, int p_305857_, int p_306123_)
```

**Parameters:**

- `p_306133_` (`int`)
- `p_305857_` (`int`)
- `p_306123_` (`int`)

**Returns:** `boolean`

### addSnapshotRealm

```java
private void addSnapshotRealm()
```

**Returns:** `private void`

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### ButtonEntry

```java
public ButtonEntry(Button p_275726_)
```

**Parameters:**

- `p_275726_` (`Button`)

**Returns:** `public`

### mouseClicked

```java
public boolean mouseClicked(double p_275240_, double p_275616_, int p_275528_)
```

**Parameters:**

- `p_275240_` (`double`)
- `p_275616_` (`double`)
- `p_275528_` (`int`)

**Returns:** `boolean`

### keyPressed

```java
public boolean keyPressed(int p_275630_, int p_275328_, int p_275519_)
```

**Parameters:**

- `p_275630_` (`int`)
- `p_275328_` (`int`)
- `p_275519_` (`int`)

**Returns:** `boolean`

### render

```java
public void render(GuiGraphics p_283542_, int p_282029_, int p_281480_, int p_281377_, int p_283160_, int p_281920_, int p_283267_, int p_281282_, boolean p_281269_, float p_282372_)
```

**Parameters:**

- `p_283542_` (`GuiGraphics`)
- `p_282029_` (`int`)
- `p_281480_` (`int`)
- `p_281377_` (`int`)
- `p_283160_` (`int`)
- `p_281920_` (`int`)
- `p_283267_` (`int`)
- `p_281282_` (`int`)
- `p_281269_` (`boolean`)
- `p_282372_` (`float`)

### setFocused

```java
public void setFocused(boolean p_309684_)
```

**Parameters:**

- `p_309684_` (`boolean`)

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### CrossButton

```java
protected CrossButton(Button.OnPress p_275420_, Component p_275193_)
```

**Parameters:**

- `p_275420_` (`Button.OnPress`)
- `p_275193_` (`Component`)

**Returns:** `protected`

### super

```java
 super()
```

**Returns:** ``

### render

```java
public void render(GuiGraphics p_302489_, int p_302486_, int p_302498_, int p_302485_, int p_302492_, int p_302487_, int p_302488_, int p_302496_, boolean p_302491_, float p_302497_)
```

**Parameters:**

- `p_302489_` (`GuiGraphics`)
- `p_302486_` (`int`)
- `p_302498_` (`int`)
- `p_302485_` (`int`)
- `p_302492_` (`int`)
- `p_302487_` (`int`)
- `p_302488_` (`int`)
- `p_302496_` (`int`)
- `p_302491_` (`boolean`)
- `p_302497_` (`float`)

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### renderStatusLights

```java
protected void renderStatusLights(RealmsServer p_305936_, GuiGraphics p_306216_, int p_306276_, int p_305985_, int p_306182_, int p_306221_)
```

**Parameters:**

- `p_305936_` (`RealmsServer`)
- `p_306216_` (`GuiGraphics`)
- `p_306276_` (`int`)
- `p_305985_` (`int`)
- `p_306182_` (`int`)
- `p_306221_` (`int`)

**Returns:** `protected void`

### drawRealmStatus

```java
private void drawRealmStatus(GuiGraphics p_306047_, int p_306257_, int p_306190_, int p_306269_, int p_306067_, ResourceLocation p_306301_, Supplier<Component> p_306129_)
```

**Parameters:**

- `p_306047_` (`GuiGraphics`)
- `p_306257_` (`int`)
- `p_306190_` (`int`)
- `p_306269_` (`int`)
- `p_306067_` (`int`)
- `p_306301_` (`ResourceLocation`)
- `p_306129_` (`Supplier<Component>`)

**Returns:** `private void`

### renderThirdLine

```java
protected void renderThirdLine(GuiGraphics p_307382_, int p_307598_, int p_307521_, RealmsServer p_307617_)
```

**Parameters:**

- `p_307382_` (`GuiGraphics`)
- `p_307598_` (`int`)
- `p_307521_` (`int`)
- `p_307617_` (`RealmsServer`)

**Returns:** `protected void`

### renderClampedString

```java
protected void renderClampedString(GuiGraphics p_306102_, String p_305897_, int p_305934_, int p_306080_, int p_305845_, int p_306320_)
```

**Parameters:**

- `p_306102_` (`GuiGraphics`)
- `p_305897_` (`String`)
- `p_305934_` (`int`)
- `p_306080_` (`int`)
- `p_305845_` (`int`)
- `p_306320_` (`int`)

**Returns:** `protected void`

### versionTextX

```java
protected int versionTextX(int p_306042_, int p_306287_, Component p_305839_)
```

**Parameters:**

- `p_306042_` (`int`)
- `p_306287_` (`int`)
- `p_305839_` (`Component`)

**Returns:** `protected int`

### firstLineY

```java
protected int firstLineY(int p_306168_)
```

**Parameters:**

- `p_306168_` (`int`)

**Returns:** `protected int`

### lineHeight

```java
protected int lineHeight()
```

**Returns:** `protected int`

### textX

```java
protected int textX(int p_305801_)
```

**Parameters:**

- `p_305801_` (`int`)

**Returns:** `protected int`

### secondLineY

```java
protected int secondLineY(int p_306251_)
```

**Parameters:**

- `p_306251_` (`int`)

**Returns:** `protected int`

### thirdLineY

```java
protected int thirdLineY(int p_306115_)
```

**Parameters:**

- `p_306115_` (`int`)

**Returns:** `protected int`

### NotificationButton

```java
public NotificationButton(Component p_296209_, ResourceLocation p_295363_, Button.OnPress p_294154_)
```

**Parameters:**

- `p_296209_` (`Component`)
- `p_295363_` (`ResourceLocation`)
- `p_294154_` (`Button.OnPress`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### notificationCount

```java
int notificationCount()
```

**Returns:** `int`

### setNotificationCount

```java
public void setNotificationCount(int p_295599_)
```

**Parameters:**

- `p_295599_` (`int`)

**Returns:** `public void`

### renderWidget

```java
public void renderWidget(GuiGraphics p_295969_, int p_294986_, int p_294741_, float p_295116_)
```

**Parameters:**

- `p_295969_` (`GuiGraphics`)
- `p_294986_` (`int`)
- `p_294741_` (`int`)
- `p_295116_` (`float`)

### drawNotificationCounter

```java
private void drawNotificationCounter(GuiGraphics p_295995_)
```

**Parameters:**

- `p_295995_` (`GuiGraphics`)

**Returns:** `private void`

### NotificationMessageEntry

```java
public NotificationMessageEntry(Component p_275215_, int p_302495_, RealmsNotification p_275494_)
```

**Parameters:**

- `p_275215_` (`Component`)
- `p_302495_` (`int`)
- `p_275494_` (`RealmsNotification`)

**Returns:** `public`

### keyPressed

```java
public boolean keyPressed(int p_275646_, int p_275453_, int p_275621_)
```

**Parameters:**

- `p_275646_` (`int`)
- `p_275453_` (`int`)
- `p_275621_` (`int`)

**Returns:** `boolean`

### updateEntryWidth

```java
private void updateEntryWidth(int p_275670_)
```

**Parameters:**

- `p_275670_` (`int`)

**Returns:** `private void`

### refreshLayout

```java
private void refreshLayout(int p_275267_)
```

**Parameters:**

- `p_275267_` (`int`)

**Returns:** `private void`

### renderBack

```java
public void renderBack(GuiGraphics p_281374_, int p_282622_, int p_283656_, int p_281830_, int p_281651_, int p_283685_, int p_281784_, int p_282510_, boolean p_283146_, float p_283324_)
```

**Parameters:**

- `p_281374_` (`GuiGraphics`)
- `p_282622_` (`int`)
- `p_283656_` (`int`)
- `p_281830_` (`int`)
- `p_281651_` (`int`)
- `p_283685_` (`int`)
- `p_281784_` (`int`)
- `p_282510_` (`int`)
- `p_283146_` (`boolean`)
- `p_283324_` (`float`)

### render

```java
public void render(GuiGraphics p_281768_, int p_275375_, int p_275358_, int p_275447_, int p_275694_, int p_275477_, int p_275710_, int p_275677_, boolean p_275542_, float p_275323_)
```

**Parameters:**

- `p_281768_` (`GuiGraphics`)
- `p_275375_` (`int`)
- `p_275358_` (`int`)
- `p_275447_` (`int`)
- `p_275694_` (`int`)
- `p_275477_` (`int`)
- `p_275710_` (`int`)
- `p_275677_` (`int`)
- `p_275542_` (`boolean`)
- `p_275323_` (`float`)

### mouseClicked

```java
public boolean mouseClicked(double p_275209_, double p_275338_, int p_275560_)
```

**Parameters:**

- `p_275209_` (`double`)
- `p_275338_` (`double`)
- `p_275560_` (`int`)

**Returns:** `boolean`

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### ParentEntry

```java
public ParentEntry(RealmsServer p_306253_)
```

**Parameters:**

- `p_306253_` (`RealmsServer`)

**Returns:** `public`

### render

```java
public void render(GuiGraphics p_305927_, int p_306097_, int p_306073_, int p_306079_, int p_306272_, int p_306279_, int p_306334_, int p_305824_, boolean p_306096_, float p_306323_)
```

**Parameters:**

- `p_305927_` (`GuiGraphics`)
- `p_306097_` (`int`)
- `p_306073_` (`int`)
- `p_306079_` (`int`)
- `p_306272_` (`int`)
- `p_306279_` (`int`)
- `p_306334_` (`int`)
- `p_305824_` (`int`)
- `p_306096_` (`boolean`)
- `p_306323_` (`float`)

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### RealmSelectionList

```java
public RealmSelectionList()
```

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### setSelected

```java
public void setSelected(RealmsMainScreen.Entry p_86849_)
```

**Parameters:**

- `p_86849_` (`RealmsMainScreen.Entry`)

**Returns:** `public void`

### getMaxPosition

```java
public int getMaxPosition()
```

**Returns:** `int`

### getRowWidth

```java
public int getRowWidth()
```

**Returns:** `int`

### request

```java
T request(RealmsClient p_275639_)
```

**Parameters:**

- `p_275639_` (`RealmsClient`)

**Returns:** `T`

### ServerEntry

```java
public ServerEntry(RealmsServer p_86856_)
```

**Parameters:**

- `p_86856_` (`RealmsServer`)

**Returns:** `public`

### render

```java
public void render(GuiGraphics p_283093_, int p_281645_, int p_283047_, int p_283525_, int p_282321_, int p_282391_, int p_281913_, int p_282475_, boolean p_282378_, float p_282843_)
```

**Parameters:**

- `p_283093_` (`GuiGraphics`)
- `p_281645_` (`int`)
- `p_283047_` (`int`)
- `p_283525_` (`int`)
- `p_282321_` (`int`)
- `p_282391_` (`int`)
- `p_281913_` (`int`)
- `p_282475_` (`int`)
- `p_282378_` (`boolean`)
- `p_282843_` (`float`)

### renderFirstLine

```java
private void renderFirstLine(GuiGraphics p_307578_, int p_307385_, int p_307677_, int p_307273_)
```

**Parameters:**

- `p_307578_` (`GuiGraphics`)
- `p_307385_` (`int`)
- `p_307677_` (`int`)
- `p_307273_` (`int`)

**Returns:** `private void`

### renderSecondLine

```java
private void renderSecondLine(GuiGraphics p_307602_, int p_307253_, int p_307666_)
```

**Parameters:**

- `p_307602_` (`GuiGraphics`)
- `p_307253_` (`int`)
- `p_307666_` (`int`)

**Returns:** `private void`

### renderOnlinePlayers

```java
private boolean renderOnlinePlayers(GuiGraphics p_350774_, int p_350924_, int p_350405_, int p_350844_, int p_351009_, int p_350267_, int p_351054_)
```

**Parameters:**

- `p_350774_` (`GuiGraphics`)
- `p_350924_` (`int`)
- `p_350405_` (`int`)
- `p_350844_` (`int`)
- `p_351009_` (`int`)
- `p_350267_` (`int`)
- `p_351054_` (`int`)

**Returns:** `private boolean`

### playRealm

```java
private void playRealm()
```

**Returns:** `private void`

### createUnitializedRealm

```java
private void createUnitializedRealm()
```

**Returns:** `private void`

### mouseClicked

```java
public boolean mouseClicked(double p_86858_, double p_86859_, int p_86860_)
```

**Parameters:**

- `p_86858_` (`double`)
- `p_86859_` (`double`)
- `p_86860_` (`int`)

**Returns:** `boolean`

### keyPressed

```java
public boolean keyPressed(int p_279120_, int p_279121_, int p_279296_)
```

**Parameters:**

- `p_279120_` (`int`)
- `p_279121_` (`int`)
- `p_279296_` (`int`)

**Returns:** `boolean`

### getNarration

```java
public Component getNarration()
```

**Returns:** `Component`

### getServer

```java
public RealmsServer getServer()
```

**Returns:** `public RealmsServer`
