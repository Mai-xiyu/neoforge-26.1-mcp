# PackRepository

**Package:** `net.minecraft.server.packs.repository`
**Type:** class
**Side:** 🖧 Server

## Methods

### PackRepository

```java
public PackRepository(RepositorySource[]... p_251886_)
```

**Parameters:**

- `p_251886_` (`RepositorySource[]...`)

**Returns:** `public`

### displayPackList

```java
public static String displayPackList(Collection<Pack> p_341622_)
```

**Parameters:**

- `p_341622_` (`Collection<Pack>`)

**Returns:** `public static String`

### reload

```java
public void reload()
```

**Returns:** `public void`

### discoverAvailable

```java
private Map<String, Pack> discoverAvailable()
```

**Returns:** `private Map<String, Pack>`

### setSelected

```java
public void setSelected(Collection<String> p_10510_)
```

**Parameters:**

- `p_10510_` (`Collection<String>`)

**Returns:** `public void`

### addPack

```java
public boolean addPack(String p_276042_)
```

**Parameters:**

- `p_276042_` (`String`)

**Returns:** `public boolean`

### removePack

```java
public boolean removePack(String p_276065_)
```

**Parameters:**

- `p_276065_` (`String`)

**Returns:** `public boolean`

### rebuildSelected

```java
public List<Pack> rebuildSelected(Collection<String> p_10518_)
```

**Parameters:**

- `p_10518_` (`Collection<String>`)

**Returns:** `public List<Pack>`

### getAvailablePacks

```java
private Stream<Pack> getAvailablePacks(Collection<String> p_10521_)
```

**Parameters:**

- `p_10521_` (`Collection<String>`)

**Returns:** `private Stream<Pack>`

### getAvailableIds

```java
public Collection<String> getAvailableIds()
```

**Returns:** `public Collection<String>`

### getAvailablePacks

```java
public Collection<Pack> getAvailablePacks()
```

**Returns:** `public Collection<Pack>`

### getSelectedIds

```java
public Collection<String> getSelectedIds()
```

**Returns:** `public Collection<String>`

### getRequestedFeatureFlags

```java
public FeatureFlagSet getRequestedFeatureFlags()
```

**Returns:** `public FeatureFlagSet`

### getSelectedPacks

```java
public Collection<Pack> getSelectedPacks()
```

**Returns:** `public Collection<Pack>`

### getPack

```java
public Pack getPack(String p_10508_)
```

**Parameters:**

- `p_10508_` (`String`)

**Returns:** `Pack`

### addPackFinder

```java
public synchronized void addPackFinder(RepositorySource packFinder)
```

**Parameters:**

- `packFinder` (`RepositorySource`)

**Returns:** `public synchronized void`

### isAvailable

```java
public boolean isAvailable(String p_10516_)
```

**Parameters:**

- `p_10516_` (`String`)

**Returns:** `public boolean`

### openAllSelected

```java
public List<PackResources> openAllSelected()
```

**Returns:** `public List<PackResources>`
