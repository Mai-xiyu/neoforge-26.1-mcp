# PlayerAdvancements

**Package:** `net.minecraft.server`
**Type:** class
**Side:** 🖧 Server

## Methods

### PlayerAdvancements

```java
public PlayerAdvancements(DataFixer p_265655_, PlayerList p_265703_, ServerAdvancementManager p_265166_, Path p_265268_, ServerPlayer p_265673_)
```

**Parameters:**

- `p_265655_` (`DataFixer`)
- `p_265703_` (`PlayerList`)
- `p_265166_` (`ServerAdvancementManager`)
- `p_265268_` (`Path`)
- `p_265673_` (`ServerPlayer`)

**Returns:** `public`

### setPlayer

```java
public void setPlayer(ServerPlayer p_135980_)
```

**Parameters:**

- `p_135980_` (`ServerPlayer`)

**Returns:** `public void`

### stopListening

```java
public void stopListening()
```

**Returns:** `public void`

### reload

```java
public void reload(ServerAdvancementManager p_135982_)
```

**Parameters:**

- `p_135982_` (`ServerAdvancementManager`)

**Returns:** `public void`

### registerListeners

```java
private void registerListeners(ServerAdvancementManager p_135995_)
```

**Parameters:**

- `p_135995_` (`ServerAdvancementManager`)

**Returns:** `private void`

### checkForAutomaticTriggers

```java
private void checkForAutomaticTriggers(ServerAdvancementManager p_136003_)
```

**Parameters:**

- `p_136003_` (`ServerAdvancementManager`)

**Returns:** `private void`

### load

```java
private void load(ServerAdvancementManager p_136007_)
```

**Parameters:**

- `p_136007_` (`ServerAdvancementManager`)

**Returns:** `private void`

### save

```java
public void save()
```

**Returns:** `public void`

### applyFrom

```java
private void applyFrom(ServerAdvancementManager p_301166_, PlayerAdvancements.Data p_301198_)
```

**Parameters:**

- `p_301166_` (`ServerAdvancementManager`)
- `p_301198_` (`PlayerAdvancements.Data`)

**Returns:** `private void`

### asData

```java
private PlayerAdvancements.Data asData()
```

**Returns:** `private PlayerAdvancements.Data`

### award

```java
public boolean award(AdvancementHolder p_300979_, String p_135990_)
```

**Parameters:**

- `p_300979_` (`AdvancementHolder`)
- `p_135990_` (`String`)

**Returns:** `public boolean`

### revoke

```java
public boolean revoke(AdvancementHolder p_301073_, String p_136000_)
```

**Parameters:**

- `p_301073_` (`AdvancementHolder`)
- `p_136000_` (`String`)

**Returns:** `public boolean`

### markForVisibilityUpdate

```java
private void markForVisibilityUpdate(AdvancementHolder p_301097_)
```

**Parameters:**

- `p_301097_` (`AdvancementHolder`)

**Returns:** `private void`

### registerListeners

```java
private void registerListeners(AdvancementHolder p_301053_)
```

**Parameters:**

- `p_301053_` (`AdvancementHolder`)

**Returns:** `private void`

### registerListener

```java
<T extends CriterionTriggerInstance> private <T extends CriterionTriggerInstance> void registerListener(AdvancementHolder p_301059_, String p_300946_, Criterion<T> p_300887_)
```

**Parameters:**

- `p_301059_` (`AdvancementHolder`)
- `p_300946_` (`String`)
- `p_300887_` (`Criterion<T>`)

**Returns:** `private <T extends CriterionTriggerInstance> void`

### unregisterListeners

```java
private void unregisterListeners(AdvancementHolder p_301082_)
```

**Parameters:**

- `p_301082_` (`AdvancementHolder`)

**Returns:** `private void`

### removeListener

```java
<T extends CriterionTriggerInstance> private <T extends CriterionTriggerInstance> void removeListener(AdvancementHolder p_301213_, String p_301253_, Criterion<T> p_301311_)
```

**Parameters:**

- `p_301213_` (`AdvancementHolder`)
- `p_301253_` (`String`)
- `p_301311_` (`Criterion<T>`)

**Returns:** `private <T extends CriterionTriggerInstance> void`

### flushDirty

```java
public void flushDirty(ServerPlayer p_135993_)
```

**Parameters:**

- `p_135993_` (`ServerPlayer`)

**Returns:** `public void`

### setSelectedTab

```java
public void setSelectedTab(AdvancementHolder p_301180_)
```

**Parameters:**

- `p_301180_` (`AdvancementHolder`)

**Returns:** `public void`

### getOrStartProgress

```java
public AdvancementProgress getOrStartProgress(AdvancementHolder p_301185_)
```

**Parameters:**

- `p_301185_` (`AdvancementHolder`)

**Returns:** `public AdvancementProgress`

### startProgress

```java
private void startProgress(AdvancementHolder p_300931_, AdvancementProgress p_135987_)
```

**Parameters:**

- `p_300931_` (`AdvancementHolder`)
- `p_135987_` (`AdvancementProgress`)

**Returns:** `private void`

### updateTreeVisibility

```java
private void updateTreeVisibility(AdvancementNode p_301178_, Set<AdvancementHolder> p_265206_, Set<ResourceLocation> p_265593_)
```

**Parameters:**

- `p_301178_` (`AdvancementNode`)
- `p_265206_` (`Set<AdvancementHolder>`)
- `p_265593_` (`Set<ResourceLocation>`)

**Returns:** `private void`

### Data

```java
static record Data(Map<ResourceLocation, AdvancementProgress> map)
```

**Parameters:**

- `map` (`Map<ResourceLocation, AdvancementProgress>`)

**Returns:** `static record`

### forEach

```java
public void forEach(BiConsumer<ResourceLocation, AdvancementProgress> p_300973_)
```

**Parameters:**

- `p_300973_` (`BiConsumer<ResourceLocation, AdvancementProgress>`)

**Returns:** `public void`
