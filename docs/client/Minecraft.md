# Minecraft

**Package:** `net.minecraft.client`
**Bus:** ❓ Unknown
**Cancelable:** ❌ No
**Extends:** `ReentrantBlockableEventLoop<Runnable>`
**Annotations:** `@OnlyIn(Dist.CLIENT)`

## Event Fields

| Field | Type | Description |
|-------|------|-------------|
| `ON_OSX` | `boolean` |  |
| `DEFAULT_FONT` | `ResourceLocation` |  |
| `UNIFORM_FONT` | `ResourceLocation` |  |
| `ALT_FONT` | `ResourceLocation` |  |
| `UPDATE_DRIVERS_ADVICE` | `String` |  |
| `levelRenderer` | `LevelRenderer` |  |
| `particleEngine` | `ParticleEngine` |  |
| `font` | `Font` |  |
| `fontFilterFishy` | `Font` |  |
| `gameRenderer` | `GameRenderer` |  |
| `debugRenderer` | `DebugRenderer` |  |
| `gui` | `Gui` |  |
| `options` | `Options` |  |
| `mouseHandler` | `MouseHandler` |  |
| `keyboardHandler` | `KeyboardHandler` |  |
| `gameDirectory` | `File` |  |
| `gameMode` | `MultiPlayerGameMode` |  |
| `level` | `ClientLevel` |  |
| `player` | `LocalPlayer` |  |
| `gameLoadFinished` | `public boolean` |  |
| `mainRenderTarget` | `public RenderTarget` |  |
| `launchedVersion` | `public String` |  |
| `versionType` | `public String` |  |
| `enforceUnicode` | `public boolean` |  |
| `levelSource` | `public LevelStorageSource` |  |
| `fps` | `public int` |  |
| `frameTimeNs` | `public long` |  |
| `framerateLimit` | `private int` |  |
| `running` | `public boolean` |  |
| `musicManager` | `public MusicManager` |  |
| `levelRunningNormally` | `private boolean` |  |
| `multiplayerServer` | `private boolean` |  |
| `telemetryManager` | `public ClientTelemetryManager` |  |
| `gpuUtilization` | `public double` |  |
| `profileKeyPairManager` | `public ProfileKeyPairManager` |  |
| `nameBanned` | `public boolean` |  |
| `chatStatus` | `public Minecraft.ChatStatus` |  |
| `demo` | `public final boolean` |  |
| `connection` | `ClientPacketListener` |  |
| `instance` | `public static Minecraft` |  |
| `currentServer` | `ServerData` |  |
| `localServer` | `public boolean` |  |
| `singleplayerServer` | `IntegratedServer` |  |
| `singleplayer` | `public boolean` |  |
| `user` | `public User` |  |
| `gameProfile` | `public GameProfile` |  |
| `proxy` | `public Proxy` |  |
| `textureManager` | `public TextureManager` |  |
| `resourceManager` | `public ResourceManager` |  |
| `resourcePackRepository` | `public PackRepository` |  |
| `vanillaPackResources` | `public VanillaPackResources` |  |
| `downloadedPackSource` | `public DownloadedPackSource` |  |
| `resourcePackDirectory` | `public Path` |  |
| `languageManager` | `public LanguageManager` |  |
| `paused` | `public boolean` |  |
| `gpuWarnlistManager` | `public GpuWarnlistManager` |  |
| `soundManager` | `public SoundManager` |  |
| `situationalMusic` | `public Music` |  |
| `minecraftSessionService` | `public MinecraftSessionService` |  |
| `skinManager` | `public SkinManager` |  |
| `cameraEntity` | `Entity` |  |
| `runningThread` | `Thread` |  |
| `blockRenderer` | `public BlockRenderDispatcher` |  |
| `entityRenderDispatcher` | `public EntityRenderDispatcher` |  |
| `blockEntityRenderDispatcher` | `public BlockEntityRenderDispatcher` |  |
| `itemRenderer` | `public ItemRenderer` |  |
| `fixerUpper` | `public DataFixer` |  |
| `timer` | `public DeltaTracker` |  |
| `blockColors` | `public BlockColors` |  |
| `toasts` | `public ToastComponent` |  |
| `tutorial` | `public Tutorial` |  |
| `windowActive` | `public boolean` |  |
| `hotbarManager` | `public HotbarManager` |  |
| `modelManager` | `public ModelManager` |  |
| `paintingTextures` | `public PaintingTextureManager` |  |
| `mobEffectTextures` | `public MobEffectTextureManager` |  |
| `mapDecorationTextures` | `public MapDecorationTextureManager` |  |
| `guiSprites` | `public GuiSpriteManager` |  |
| `profiler` | `public ProfilerFiller` |  |
| `progressListener` | `StoringChunkProgressListener` |  |
| `splashManager` | `public SplashManager` |  |
| `overlay` | `Overlay` |  |
| `playerSocialManager` | `public PlayerSocialManager` |  |
| `window` | `public Window` |  |
| `debugOverlay` | `public DebugScreenOverlay` |  |
| `itemColors` | `public ItemColors` |  |
| `entityModels` | `public EntityModelSet` |  |
| `textFilteringEnabled` | `public boolean` |  |
| `profileKeySignatureValidator` | `SignatureValidator` |  |
| `lastInputType` | `public InputType` |  |
| `narrator` | `public GameNarrator` |  |
| `chatListener` | `public ChatListener` |  |
| `reportingContext` | `public ReportingContext` |  |
| `launcherBrand` | `String` |  |
| `message` | `public Component` |  |

## Accessors

- `public boolean isGameLoadFinished()` 
- `public RenderTarget getMainRenderTarget()` 
- `public String getLaunchedVersion()` 
- `public String getVersionType()` 
- `public boolean isEnforceUnicode()` 
- `public LevelStorageSource getLevelSource()` 
- `public void setScreen(Screen p_91153_)` 
- `public void setOverlay(Overlay p_91151_)` 
- `public int getFps()` 
- `public long getFrameTimeNs()` 
- `private int getFramerateLimit()` 
- `public boolean isRunning()` 
- `public MusicManager getMusicManager()` 
- `private boolean isLevelRunningNormally()` 
- `private boolean isMultiplayerServer()` 
- `public ClientTelemetryManager getTelemetryManager()` 
- `public double getGpuUtilization()` 
- `public ProfileKeyPairManager getProfileKeyPairManager()` 
- `public void setLevel(ClientLevel p_91157_, ReceivingLevelScreen.Reason p_341652_)` 
- `public boolean isNameBanned()` 
- `public boolean isBlocked(UUID p_91247_)` 
- `public Minecraft.ChatStatus getChatStatus()` 
- `public final boolean isDemo()` 
- `public ClientPacketListener getConnection()` 
- `public static Minecraft getInstance()` 
- `public ServerData getCurrentServer()` 
- `public boolean isLocalServer()` 
- `public IntegratedServer getSingleplayerServer()` 
- `public boolean isSingleplayer()` 
- `public boolean isLocalPlayer(UUID p_295141_)` 
- `public User getUser()` 
- `public GameProfile getGameProfile()` 
- `public Proxy getProxy()` 
- `public TextureManager getTextureManager()` 
- `public ResourceManager getResourceManager()` 
- `public PackRepository getResourcePackRepository()` 
- `public VanillaPackResources getVanillaPackResources()` 
- `public DownloadedPackSource getDownloadedPackSource()` 
- `public Path getResourcePackDirectory()` 
- `public LanguageManager getLanguageManager()` 
- `public Function<ResourceLocation, TextureAtlasSprite> getTextureAtlas(ResourceLocation p_91259_)` 
- `public boolean isPaused()` 
- `public GpuWarnlistManager getGpuWarnlistManager()` 
- `public SoundManager getSoundManager()` 
- `public Music getSituationalMusic()` 
- `public MinecraftSessionService getMinecraftSessionService()` 
- `public SkinManager getSkinManager()` 
- `public Entity getCameraEntity()` 
- `public void setCameraEntity(Entity p_91119_)` 
- `protected Thread getRunningThread()` 
- `public BlockRenderDispatcher getBlockRenderer()` 
- `public EntityRenderDispatcher getEntityRenderDispatcher()` 
- `public BlockEntityRenderDispatcher getBlockEntityRenderDispatcher()` 
- `public ItemRenderer getItemRenderer()` 
- `public DataFixer getFixerUpper()` 
- `public DeltaTracker getTimer()` 
- `public BlockColors getBlockColors()` 
- `public ToastComponent getToasts()` 
- `public Tutorial getTutorial()` 
- `public boolean isWindowActive()` 
- `public HotbarManager getHotbarManager()` 
- `public ModelManager getModelManager()` 
- `public PaintingTextureManager getPaintingTextures()` 
- `public MobEffectTextureManager getMobEffectTextures()` 
- `public MapDecorationTextureManager getMapDecorationTextures()` 
- `public GuiSpriteManager getGuiSprites()` 
- `public void setWindowActive(boolean p_91261_)` 
- `public ProfilerFiller getProfiler()` 
- `public StoringChunkProgressListener getProgressListener()` 
- `public SplashManager getSplashManager()` 
- `public Overlay getOverlay()` 
- `public PlayerSocialManager getPlayerSocialManager()` 
- `public Window getWindow()` 
- `public DebugScreenOverlay getDebugOverlay()` 
- `public ItemColors getItemColors()` 
- `public EntityModelSet getEntityModels()` 
- `public boolean isTextFilteringEnabled()` 
- `public SignatureValidator getProfileKeySignatureValidator()` 
- `public boolean canValidateProfileKeys()` 
- `public InputType getLastInputType()` 
- `public void setLastInputType(InputType p_265509_)` 
- `public GameNarrator getNarrator()` 
- `public ChatListener getChatListener()` 
- `public ReportingContext getReportingContext()` 
- `private float getTickTargetMillis(float p_308953_)` 
- `public static String getLauncherBrand()` 
- `public boolean isChatAllowed(boolean p_168045_)` 
- `public boolean isChatAllowed(boolean p_168051_)` 
- `public boolean isChatAllowed(boolean p_168057_)` 
- `public boolean isChatAllowed(boolean p_168063_)` 
- `public Component getMessage()` 
- `public abstract boolean isChatAllowed(boolean p_168035_)` 

## Usage Example

```java
@EventBusSubscriber(modid = "yourmod")
public class MinecraftHandler {
    @SubscribeEvent
    public static void onMinecraft(Minecraft event) {
        // Handle event
    }
}
```

## Sub-Events

### ChatStatus
