# GsonHelper

**Package:** `net.minecraft.util`
**Type:** class

## Methods

### isStringValue

```java
public static boolean isStringValue(JsonObject p_13814_, String p_13815_)
```

**Parameters:**

- `p_13814_` (`JsonObject`)
- `p_13815_` (`String`)

**Returns:** `public static boolean`

### isStringValue

```java
public static boolean isStringValue(JsonElement p_13804_)
```

**Parameters:**

- `p_13804_` (`JsonElement`)

**Returns:** `public static boolean`

### isNumberValue

```java
public static boolean isNumberValue(JsonObject p_144763_, String p_144764_)
```

**Parameters:**

- `p_144763_` (`JsonObject`)
- `p_144764_` (`String`)

**Returns:** `public static boolean`

### isNumberValue

```java
public static boolean isNumberValue(JsonElement p_13873_)
```

**Parameters:**

- `p_13873_` (`JsonElement`)

**Returns:** `public static boolean`

### isBooleanValue

```java
public static boolean isBooleanValue(JsonObject p_13881_, String p_13882_)
```

**Parameters:**

- `p_13881_` (`JsonObject`)
- `p_13882_` (`String`)

**Returns:** `public static boolean`

### isBooleanValue

```java
public static boolean isBooleanValue(JsonElement p_144768_)
```

**Parameters:**

- `p_144768_` (`JsonElement`)

**Returns:** `public static boolean`

### isArrayNode

```java
public static boolean isArrayNode(JsonObject p_13886_, String p_13887_)
```

**Parameters:**

- `p_13886_` (`JsonObject`)
- `p_13887_` (`String`)

**Returns:** `public static boolean`

### isObjectNode

```java
public static boolean isObjectNode(JsonObject p_144773_, String p_144774_)
```

**Parameters:**

- `p_144773_` (`JsonObject`)
- `p_144774_` (`String`)

**Returns:** `public static boolean`

### isValidPrimitive

```java
public static boolean isValidPrimitive(JsonObject p_13895_, String p_13896_)
```

**Parameters:**

- `p_13895_` (`JsonObject`)
- `p_13896_` (`String`)

**Returns:** `public static boolean`

### isValidNode

```java
public static boolean isValidNode(JsonObject p_13901_, String p_13902_)
```

**Parameters:**

- `p_13901_` (`JsonObject`)
- `p_13902_` (`String`)

**Returns:** `public static boolean`

### getNonNull

```java
public static JsonElement getNonNull(JsonObject p_289782_, String p_289789_)
```

**Parameters:**

- `p_289782_` (`JsonObject`)
- `p_289789_` (`String`)

**Returns:** `public static JsonElement`

### JsonSyntaxException

```java
throw new JsonSyntaxException("Missing field " + p_289789_)
```

**Parameters:**

- `p_289789_` (`"Missing field " +`)

**Returns:** `throw new`

### convertToString

```java
public static String convertToString(JsonElement p_13806_, String p_13807_)
```

**Parameters:**

- `p_13806_` (`JsonElement`)
- `p_13807_` (`String`)

**Returns:** `public static String`

### getAsString

```java
public static String getAsString(JsonObject p_13907_, String p_13908_)
```

**Parameters:**

- `p_13907_` (`JsonObject`)
- `p_13908_` (`String`)

**Returns:** `public static String`

### JsonSyntaxException

```java
throw new JsonSyntaxException("Missing " + p_13908_ + ", expected to find a string")
```

**Parameters:**

- `"` (`"Missing " + p_13908_ +`)
- `string"` (`expected to find a`)

**Returns:** `throw new`

### getAsString

```java
public static String getAsString(JsonObject p_13852_, String p_13853_, String p_13854_)
```

**Parameters:**

- `p_13852_` (`JsonObject`)
- `p_13853_` (`String`)
- `p_13854_` (`String`)

**Returns:** `String`

### convertToItem

```java
public static Holder<Item> convertToItem(JsonElement p_13875_, String p_13876_)
```

**Parameters:**

- `p_13875_` (`JsonElement`)
- `p_13876_` (`String`)

**Returns:** `public static Holder<Item>`

### getAsItem

```java
public static Holder<Item> getAsItem(JsonObject p_144747_, String p_144748_)
```

**Parameters:**

- `p_144747_` (`JsonObject`)
- `p_144748_` (`String`)

**Returns:** `public static Holder<Item>`

### JsonSyntaxException

```java
throw new JsonSyntaxException("Missing " + p_144748_ + ", expected to find an item")
```

**Parameters:**

- `"` (`"Missing " + p_144748_ +`)
- `item"` (`expected to find an`)

**Returns:** `throw new`

### getAsItem

```java
public static Holder<Item> getAsItem(JsonObject p_13910_, String p_13911_, Holder<Item> p_298485_)
```

**Parameters:**

- `p_13910_` (`JsonObject`)
- `p_13911_` (`String`)
- `p_298485_` (`Holder<Item>`)

**Returns:** `Holder<Item>`

### convertToBoolean

```java
public static boolean convertToBoolean(JsonElement p_13878_, String p_13879_)
```

**Parameters:**

- `p_13878_` (`JsonElement`)
- `p_13879_` (`String`)

**Returns:** `public static boolean`

### getAsBoolean

```java
public static boolean getAsBoolean(JsonObject p_13913_, String p_13914_)
```

**Parameters:**

- `p_13913_` (`JsonObject`)
- `p_13914_` (`String`)

**Returns:** `public static boolean`

### JsonSyntaxException

```java
throw new JsonSyntaxException("Missing " + p_13914_ + ", expected to find a Boolean")
```

**Parameters:**

- `"` (`"Missing " + p_13914_ +`)
- `Boolean"` (`expected to find a`)

**Returns:** `throw new`

### getAsBoolean

```java
public static boolean getAsBoolean(JsonObject p_13856_, String p_13857_, boolean p_13858_)
```

**Parameters:**

- `p_13856_` (`JsonObject`)
- `p_13857_` (`String`)
- `p_13858_` (`boolean`)

**Returns:** `public static boolean`

### convertToDouble

```java
public static double convertToDouble(JsonElement p_144770_, String p_144771_)
```

**Parameters:**

- `p_144770_` (`JsonElement`)
- `p_144771_` (`String`)

**Returns:** `public static double`

### getAsDouble

```java
public static double getAsDouble(JsonObject p_144785_, String p_144786_)
```

**Parameters:**

- `p_144785_` (`JsonObject`)
- `p_144786_` (`String`)

**Returns:** `public static double`

### JsonSyntaxException

```java
throw new JsonSyntaxException("Missing " + p_144786_ + ", expected to find a Double")
```

**Parameters:**

- `"` (`"Missing " + p_144786_ +`)
- `Double"` (`expected to find a`)

**Returns:** `throw new`

### getAsDouble

```java
public static double getAsDouble(JsonObject p_144743_, String p_144744_, double p_144745_)
```

**Parameters:**

- `p_144743_` (`JsonObject`)
- `p_144744_` (`String`)
- `p_144745_` (`double`)

**Returns:** `public static double`

### convertToFloat

```java
public static float convertToFloat(JsonElement p_13889_, String p_13890_)
```

**Parameters:**

- `p_13889_` (`JsonElement`)
- `p_13890_` (`String`)

**Returns:** `public static float`

### getAsFloat

```java
public static float getAsFloat(JsonObject p_13916_, String p_13917_)
```

**Parameters:**

- `p_13916_` (`JsonObject`)
- `p_13917_` (`String`)

**Returns:** `public static float`

### JsonSyntaxException

```java
throw new JsonSyntaxException("Missing " + p_13917_ + ", expected to find a Float")
```

**Parameters:**

- `"` (`"Missing " + p_13917_ +`)
- `Float"` (`expected to find a`)

**Returns:** `throw new`

### getAsFloat

```java
public static float getAsFloat(JsonObject p_13821_, String p_13822_, float p_13823_)
```

**Parameters:**

- `p_13821_` (`JsonObject`)
- `p_13822_` (`String`)
- `p_13823_` (`float`)

**Returns:** `public static float`

### convertToLong

```java
public static long convertToLong(JsonElement p_13892_, String p_13893_)
```

**Parameters:**

- `p_13892_` (`JsonElement`)
- `p_13893_` (`String`)

**Returns:** `public static long`

### getAsLong

```java
public static long getAsLong(JsonObject p_13922_, String p_13923_)
```

**Parameters:**

- `p_13922_` (`JsonObject`)
- `p_13923_` (`String`)

**Returns:** `public static long`

### JsonSyntaxException

```java
throw new JsonSyntaxException("Missing " + p_13923_ + ", expected to find a Long")
```

**Parameters:**

- `"` (`"Missing " + p_13923_ +`)
- `Long"` (`expected to find a`)

**Returns:** `throw new`

### getAsLong

```java
public static long getAsLong(JsonObject p_13829_, String p_13830_, long p_13831_)
```

**Parameters:**

- `p_13829_` (`JsonObject`)
- `p_13830_` (`String`)
- `p_13831_` (`long`)

**Returns:** `public static long`

### convertToInt

```java
public static int convertToInt(JsonElement p_13898_, String p_13899_)
```

**Parameters:**

- `p_13898_` (`JsonElement`)
- `p_13899_` (`String`)

**Returns:** `public static int`

### getAsInt

```java
public static int getAsInt(JsonObject p_13928_, String p_13929_)
```

**Parameters:**

- `p_13928_` (`JsonObject`)
- `p_13929_` (`String`)

**Returns:** `public static int`

### JsonSyntaxException

```java
throw new JsonSyntaxException("Missing " + p_13929_ + ", expected to find a Int")
```

**Parameters:**

- `"` (`"Missing " + p_13929_ +`)
- `Int"` (`expected to find a`)

**Returns:** `throw new`

### getAsInt

```java
public static int getAsInt(JsonObject p_13825_, String p_13826_, int p_13827_)
```

**Parameters:**

- `p_13825_` (`JsonObject`)
- `p_13826_` (`String`)
- `p_13827_` (`int`)

**Returns:** `public static int`

### convertToByte

```java
public static byte convertToByte(JsonElement p_13904_, String p_13905_)
```

**Parameters:**

- `p_13904_` (`JsonElement`)
- `p_13905_` (`String`)

**Returns:** `public static byte`

### getAsByte

```java
public static byte getAsByte(JsonObject p_144791_, String p_144792_)
```

**Parameters:**

- `p_144791_` (`JsonObject`)
- `p_144792_` (`String`)

**Returns:** `public static byte`

### JsonSyntaxException

```java
throw new JsonSyntaxException("Missing " + p_144792_ + ", expected to find a Byte")
```

**Parameters:**

- `"` (`"Missing " + p_144792_ +`)
- `Byte"` (`expected to find a`)

**Returns:** `throw new`

### getAsByte

```java
public static byte getAsByte(JsonObject p_13817_, String p_13818_, byte p_13819_)
```

**Parameters:**

- `p_13817_` (`JsonObject`)
- `p_13818_` (`String`)
- `p_13819_` (`byte`)

**Returns:** `public static byte`

### convertToCharacter

```java
public static char convertToCharacter(JsonElement p_144776_, String p_144777_)
```

**Parameters:**

- `p_144776_` (`JsonElement`)
- `p_144777_` (`String`)

**Returns:** `public static char`

### getAsCharacter

```java
public static char getAsCharacter(JsonObject p_144794_, String p_144795_)
```

**Parameters:**

- `p_144794_` (`JsonObject`)
- `p_144795_` (`String`)

**Returns:** `public static char`

### JsonSyntaxException

```java
throw new JsonSyntaxException("Missing " + p_144795_ + ", expected to find a Character")
```

**Parameters:**

- `"` (`"Missing " + p_144795_ +`)
- `Character"` (`expected to find a`)

**Returns:** `throw new`

### getAsCharacter

```java
public static char getAsCharacter(JsonObject p_144739_, String p_144740_, char p_144741_)
```

**Parameters:**

- `p_144739_` (`JsonObject`)
- `p_144740_` (`String`)
- `p_144741_` (`char`)

**Returns:** `public static char`

### convertToBigDecimal

```java
public static BigDecimal convertToBigDecimal(JsonElement p_144779_, String p_144780_)
```

**Parameters:**

- `p_144779_` (`JsonElement`)
- `p_144780_` (`String`)

**Returns:** `public static BigDecimal`

### getAsBigDecimal

```java
public static BigDecimal getAsBigDecimal(JsonObject p_144797_, String p_144798_)
```

**Parameters:**

- `p_144797_` (`JsonObject`)
- `p_144798_` (`String`)

**Returns:** `public static BigDecimal`

### JsonSyntaxException

```java
throw new JsonSyntaxException("Missing " + p_144798_ + ", expected to find a BigDecimal")
```

**Parameters:**

- `"` (`"Missing " + p_144798_ +`)
- `BigDecimal"` (`expected to find a`)

**Returns:** `throw new`

### getAsBigDecimal

```java
public static BigDecimal getAsBigDecimal(JsonObject p_144751_, String p_144752_, BigDecimal p_144753_)
```

**Parameters:**

- `p_144751_` (`JsonObject`)
- `p_144752_` (`String`)
- `p_144753_` (`BigDecimal`)

**Returns:** `public static BigDecimal`

### convertToBigInteger

```java
public static BigInteger convertToBigInteger(JsonElement p_144782_, String p_144783_)
```

**Parameters:**

- `p_144782_` (`JsonElement`)
- `p_144783_` (`String`)

**Returns:** `public static BigInteger`

### getAsBigInteger

```java
public static BigInteger getAsBigInteger(JsonObject p_144800_, String p_144801_)
```

**Parameters:**

- `p_144800_` (`JsonObject`)
- `p_144801_` (`String`)

**Returns:** `public static BigInteger`

### JsonSyntaxException

```java
throw new JsonSyntaxException("Missing " + p_144801_ + ", expected to find a BigInteger")
```

**Parameters:**

- `"` (`"Missing " + p_144801_ +`)
- `BigInteger"` (`expected to find a`)

**Returns:** `throw new`

### getAsBigInteger

```java
public static BigInteger getAsBigInteger(JsonObject p_144755_, String p_144756_, BigInteger p_144757_)
```

**Parameters:**

- `p_144755_` (`JsonObject`)
- `p_144756_` (`String`)
- `p_144757_` (`BigInteger`)

**Returns:** `public static BigInteger`

### convertToShort

```java
public static short convertToShort(JsonElement p_144788_, String p_144789_)
```

**Parameters:**

- `p_144788_` (`JsonElement`)
- `p_144789_` (`String`)

**Returns:** `public static short`

### getAsShort

```java
public static short getAsShort(JsonObject p_144803_, String p_144804_)
```

**Parameters:**

- `p_144803_` (`JsonObject`)
- `p_144804_` (`String`)

**Returns:** `public static short`

### JsonSyntaxException

```java
throw new JsonSyntaxException("Missing " + p_144804_ + ", expected to find a Short")
```

**Parameters:**

- `"` (`"Missing " + p_144804_ +`)
- `Short"` (`expected to find a`)

**Returns:** `throw new`

### getAsShort

```java
public static short getAsShort(JsonObject p_144759_, String p_144760_, short p_144761_)
```

**Parameters:**

- `p_144759_` (`JsonObject`)
- `p_144760_` (`String`)
- `p_144761_` (`short`)

**Returns:** `public static short`

### convertToJsonObject

```java
public static JsonObject convertToJsonObject(JsonElement p_13919_, String p_13920_)
```

**Parameters:**

- `p_13919_` (`JsonElement`)
- `p_13920_` (`String`)

**Returns:** `public static JsonObject`

### getAsJsonObject

```java
public static JsonObject getAsJsonObject(JsonObject p_13931_, String p_13932_)
```

**Parameters:**

- `p_13931_` (`JsonObject`)
- `p_13932_` (`String`)

**Returns:** `public static JsonObject`

### JsonSyntaxException

```java
throw new JsonSyntaxException("Missing " + p_13932_ + ", expected to find a JsonObject")
```

**Parameters:**

- `"` (`"Missing " + p_13932_ +`)
- `JsonObject"` (`expected to find a`)

**Returns:** `throw new`

### getAsJsonObject

```java
public static JsonObject getAsJsonObject(JsonObject p_13842_, String p_13843_, JsonObject p_13844_)
```

**Parameters:**

- `p_13842_` (`JsonObject`)
- `p_13843_` (`String`)
- `p_13844_` (`JsonObject`)

**Returns:** `JsonObject`

### convertToJsonArray

```java
public static JsonArray convertToJsonArray(JsonElement p_13925_, String p_13926_)
```

**Parameters:**

- `p_13925_` (`JsonElement`)
- `p_13926_` (`String`)

**Returns:** `public static JsonArray`

### getAsJsonArray

```java
public static JsonArray getAsJsonArray(JsonObject p_13934_, String p_13935_)
```

**Parameters:**

- `p_13934_` (`JsonObject`)
- `p_13935_` (`String`)

**Returns:** `public static JsonArray`

### JsonSyntaxException

```java
throw new JsonSyntaxException("Missing " + p_13935_ + ", expected to find a JsonArray")
```

**Parameters:**

- `"` (`"Missing " + p_13935_ +`)
- `JsonArray"` (`expected to find a`)

**Returns:** `throw new`

### getAsJsonArray

```java
public static JsonArray getAsJsonArray(JsonObject p_13833_, String p_13834_, JsonArray p_13835_)
```

**Parameters:**

- `p_13833_` (`JsonObject`)
- `p_13834_` (`String`)
- `p_13835_` (`JsonArray`)

**Returns:** `JsonArray`

### convertToObject

```java
<T> public static <T> T convertToObject(JsonElement p_13809_, String p_13810_, JsonDeserializationContext p_13811_, Class<? extends T> p_13812_)
```

**Parameters:**

- `p_13809_` (`JsonElement`)
- `p_13810_` (`String`)
- `p_13811_` (`JsonDeserializationContext`)
- `p_13812_` (`Class<? extends T>`)

**Returns:** `public static <T> T`

### JsonSyntaxException

```java
throw new JsonSyntaxException("Missing " + p_13810_)
```

**Parameters:**

- `p_13810_` (`"Missing " +`)

**Returns:** `throw new`

### getAsObject

```java
<T> public static <T> T getAsObject(JsonObject p_13837_, String p_13838_, JsonDeserializationContext p_13839_, Class<? extends T> p_13840_)
```

**Parameters:**

- `p_13837_` (`JsonObject`)
- `p_13838_` (`String`)
- `p_13839_` (`JsonDeserializationContext`)
- `p_13840_` (`Class<? extends T>`)

**Returns:** `public static <T> T`

### JsonSyntaxException

```java
throw new JsonSyntaxException("Missing " + p_13838_)
```

**Parameters:**

- `p_13838_` (`"Missing " +`)

**Returns:** `throw new`

### getAsObject

```java
public static <T> T getAsObject(JsonObject p_13846_, String p_13847_, T p_13848_, JsonDeserializationContext p_13849_, Class<? extends T> p_13850_)
```

**Parameters:**

- `p_13846_` (`JsonObject`)
- `p_13847_` (`String`)
- `p_13848_` (`T`)
- `p_13849_` (`JsonDeserializationContext`)
- `p_13850_` (`Class<? extends T>`)

**Returns:** `T`

### getType

```java
public static String getType(JsonElement p_13884_)
```

**Parameters:**

- `p_13884_` (`JsonElement`)

**Returns:** `public static String`

### fromNullableJson

```java
public static <T> T fromNullableJson(Gson p_13781_, Reader p_13782_, Class<T> p_13783_, boolean p_13784_)
```

**Parameters:**

- `p_13781_` (`Gson`)
- `p_13782_` (`Reader`)
- `p_13783_` (`Class<T>`)
- `p_13784_` (`boolean`)

**Returns:** `T`

### JsonParseException

```java
throw new JsonParseException()
```

**Returns:** `throw new`

### fromJson

```java
<T> public static <T> T fromJson(Gson p_263516_, Reader p_263522_, Class<T> p_263539_, boolean p_263489_)
```

**Parameters:**

- `p_263516_` (`Gson`)
- `p_263522_` (`Reader`)
- `p_263539_` (`Class<T>`)
- `p_263489_` (`boolean`)

**Returns:** `public static <T> T`

### JsonParseException

```java
throw new JsonParseException("JSON data was null or empty")
```

**Parameters:**

- `empty"` (`"JSON data was null or`)

**Returns:** `throw new`

### fromNullableJson

```java
public static <T> T fromNullableJson(Gson p_13772_, Reader p_13773_, TypeToken<T> p_13774_, boolean p_13775_)
```

**Parameters:**

- `p_13772_` (`Gson`)
- `p_13773_` (`Reader`)
- `p_13774_` (`TypeToken<T>`)
- `p_13775_` (`boolean`)

**Returns:** `T`

### JsonParseException

```java
throw new JsonParseException()
```

**Returns:** `throw new`

### fromJson

```java
<T> public static <T> T fromJson(Gson p_263499_, Reader p_263527_, TypeToken<T> p_263525_, boolean p_263507_)
```

**Parameters:**

- `p_263499_` (`Gson`)
- `p_263527_` (`Reader`)
- `p_263525_` (`TypeToken<T>`)
- `p_263507_` (`boolean`)

**Returns:** `public static <T> T`

### JsonParseException

```java
throw new JsonParseException("JSON data was null or empty")
```

**Parameters:**

- `empty"` (`"JSON data was null or`)

**Returns:** `throw new`

### fromNullableJson

```java
public static <T> T fromNullableJson(Gson p_13790_, String p_13791_, TypeToken<T> p_13792_, boolean p_13793_)
```

**Parameters:**

- `p_13790_` (`Gson`)
- `p_13791_` (`String`)
- `p_13792_` (`TypeToken<T>`)
- `p_13793_` (`boolean`)

**Returns:** `T`

### fromJson

```java
<T> public static <T> T fromJson(Gson p_263492_, String p_263488_, Class<T> p_263503_, boolean p_263506_)
```

**Parameters:**

- `p_263492_` (`Gson`)
- `p_263488_` (`String`)
- `p_263503_` (`Class<T>`)
- `p_263506_` (`boolean`)

**Returns:** `public static <T> T`

### fromNullableJson

```java
public static <T> T fromNullableJson(Gson p_13799_, String p_13800_, Class<T> p_13801_, boolean p_13802_)
```

**Parameters:**

- `p_13799_` (`Gson`)
- `p_13800_` (`String`)
- `p_13801_` (`Class<T>`)
- `p_13802_` (`boolean`)

**Returns:** `T`

### fromJson

```java
<T> public static <T> T fromJson(Gson p_13768_, Reader p_13769_, TypeToken<T> p_13770_)
```

**Parameters:**

- `p_13768_` (`Gson`)
- `p_13769_` (`Reader`)
- `p_13770_` (`TypeToken<T>`)

**Returns:** `public static <T> T`

### fromJson

```java
return fromJson()
```

**Returns:** `return`

### fromNullableJson

```java
public static <T> T fromNullableJson(Gson p_13786_, String p_13787_, TypeToken<T> p_13788_)
```

**Parameters:**

- `p_13786_` (`Gson`)
- `p_13787_` (`String`)
- `p_13788_` (`TypeToken<T>`)

**Returns:** `T`

### fromNullableJson

```java
return fromNullableJson()
```

**Returns:** `return`

### fromJson

```java
<T> public static <T> T fromJson(Gson p_13777_, Reader p_13778_, Class<T> p_13779_)
```

**Parameters:**

- `p_13777_` (`Gson`)
- `p_13778_` (`Reader`)
- `p_13779_` (`Class<T>`)

**Returns:** `public static <T> T`

### fromJson

```java
return fromJson()
```

**Returns:** `return`

### fromJson

```java
<T> public static <T> T fromJson(Gson p_13795_, String p_13796_, Class<T> p_13797_)
```

**Parameters:**

- `p_13795_` (`Gson`)
- `p_13796_` (`String`)
- `p_13797_` (`Class<T>`)

**Returns:** `public static <T> T`

### fromJson

```java
return fromJson()
```

**Returns:** `return`

### parse

```java
public static JsonObject parse(String p_13870_, boolean p_13871_)
```

**Parameters:**

- `p_13870_` (`String`)
- `p_13871_` (`boolean`)

**Returns:** `public static JsonObject`

### parse

```java
public static JsonObject parse(Reader p_13862_, boolean p_13863_)
```

**Parameters:**

- `p_13862_` (`Reader`)
- `p_13863_` (`boolean`)

**Returns:** `public static JsonObject`

### fromJson

```java
return fromJson()
```

**Returns:** `return`

### parse

```java
public static JsonObject parse(String p_13865_)
```

**Parameters:**

- `p_13865_` (`String`)

**Returns:** `public static JsonObject`

### parse

```java
return parse()
```

**Returns:** `return`

### parse

```java
public static JsonObject parse(Reader p_13860_)
```

**Parameters:**

- `p_13860_` (`Reader`)

**Returns:** `public static JsonObject`

### parse

```java
return parse()
```

**Returns:** `return`

### parseArray

```java
public static JsonArray parseArray(String p_216215_)
```

**Parameters:**

- `p_216215_` (`String`)

**Returns:** `public static JsonArray`

### parseArray

```java
public static JsonArray parseArray(Reader p_144766_)
```

**Parameters:**

- `p_144766_` (`Reader`)

**Returns:** `public static JsonArray`

### fromJson

```java
return fromJson()
```

**Returns:** `return`

### toStableString

```java
public static String toStableString(JsonElement p_216217_)
```

**Parameters:**

- `p_216217_` (`JsonElement`)

**Returns:** `public static String`

### AssertionError

```java
throw new AssertionError()
```

**Returns:** `throw new`

### writeValue

```java
public static void writeValue(JsonWriter p_216208_, JsonElement p_216209_, Comparator<String> p_216210_)
```

**Parameters:**

- `p_216208_` (`JsonWriter`)
- `p_216209_` (`JsonElement`)
- `p_216210_` (`Comparator<String>`)

**Returns:** `public static void`

### writeValue

```java
 writeValue()
```

**Returns:** ``

### sortByKeyIfNeeded

```java
private static Collection<Entry<String, JsonElement>> sortByKeyIfNeeded(Collection<Entry<String, JsonElement>> p_216212_, Comparator<String> p_216213_)
```

**Parameters:**

- `p_216212_` (`Collection<Entry<String, JsonElement>>`)
- `p_216213_` (`Comparator<String>`)

**Returns:** `private static Collection<Entry<String, JsonElement>>`
