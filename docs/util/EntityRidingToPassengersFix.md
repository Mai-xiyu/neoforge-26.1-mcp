# EntityRidingToPassengersFix

**Package:** `net.minecraft.util.datafix.fixes`
**Type:** class
**Extends:** `DataFix`

## Methods

### EntityRidingToPassengersFix

```java
public EntityRidingToPassengersFix(Schema p_15638_, boolean p_15639_)
```

**Parameters:**

- `p_15638_` (`Schema`)
- `p_15639_` (`boolean`)

**Returns:** `public`

### super

```java
 super()
```

**Returns:** ``

### makeRule

```java
public TypeRewriteRule makeRule()
```

**Returns:** `TypeRewriteRule`

### cap

```java
<OldEntityTree, NewEntityTree, Entity> private <OldEntityTree, NewEntityTree, Entity> TypeRewriteRule cap(Schema p_15642_, Schema p_15643_, Type<OldEntityTree> p_15644_, Type<NewEntityTree> p_15645_, Type<Entity> p_15646_)
```

**Parameters:**

- `p_15642_` (`Schema`)
- `p_15643_` (`Schema`)
- `p_15644_` (`Type<OldEntityTree>`)
- `p_15645_` (`Type<NewEntityTree>`)
- `p_15646_` (`Type<Entity>`)

**Returns:** `private <OldEntityTree, NewEntityTree, Entity> TypeRewriteRule`

### IllegalStateException

```java
throw new IllegalStateException("Old entity type is not what was expected.")
```

**Parameters:**

- `expected."` (`"Old entity type is not what was`)

**Returns:** `throw new`

### IllegalStateException

```java
throw new IllegalStateException("New entity type is not what was expected.")
```

**Parameters:**

- `expected."` (`"New entity type is not what was`)

**Returns:** `throw new`
