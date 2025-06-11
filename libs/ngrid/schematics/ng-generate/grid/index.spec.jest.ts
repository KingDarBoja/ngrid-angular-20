import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createTestApp, getFileContent } from '../../utils/testing';
import { Schema } from './schema';

describe('ngrid grid schematic', () => {
  let runner: SchematicTestRunner;

  const baseOptions: Schema = {
    name: 'foo',
    project: 'app',
  };

  beforeEach(() => {
    runner = new SchematicTestRunner('schematics', require.resolve('../../collection.json'));
  });

  it('should create table files and add them to module', async () => {
    const app = await createTestApp(runner);
    const tree = await runner.runSchematic('grid', baseOptions, app);
    const files = tree.files;

    expect(files).toContain('/projects/app/src/app/foo/foo.component.css');
    expect(files).toContain('/projects/app/src/app/foo/foo.component.html');
    expect(files).toContain('/projects/app/src/app/foo/foo.component.spec.ts');
    expect(files).toContain('/projects/app/src/app/foo/foo.component.ts');

    const moduleContent = getFileContent(tree, '/projects/app/src/app/app.module.ts');
    expect(moduleContent).toMatch(/import.*Foo.*from '.\/foo\/foo.component'/);
    expect(moduleContent).toMatch(/declarations:\s*\[[^\]]+?,\r?\n\s+FooComponent\r?\n/m);

    const componentContent =
        getFileContent(tree, '/projects/app/src/app/foo/foo.component.ts');

    expect(componentContent).toContain('FooItem');
  });

  it('should add grid imports to module', async () => {
    const app = await createTestApp(runner);
    const tree = await runner.runSchematic('grid', baseOptions, app);
    const moduleContent = getFileContent(tree, '/projects/app/src/app/app.module.ts');

    expect(moduleContent).toContain('PblNgridModule');

    expect(moduleContent).toContain(`import { PblNgridModule } from '@perbula/ngrid';`);
  });

  describe('style option', () => {
    it('should respect the option value', async () => {
      const tree = await runner.runSchematic('grid', {style: 'scss', ...baseOptions}, await createTestApp(runner));
      expect(tree.files).toContain('/projects/app/src/app/foo/foo.component.scss');
    });

    it('should fall back to the @schematics/angular:component option value', async () => {
      const tree =
          await runner
              .runSchematic('grid', baseOptions, await createTestApp(runner, {style: 'less'}));

      expect(tree.files).toContain('/projects/app/src/app/foo/foo.component.less');
    });
  });

  describe('inlineStyle option', () => {
    it('should respect the option value', async () => {
      const tree =
          await runner
              .runSchematic(
                  'grid', {inlineStyle: true, ...baseOptions}, await createTestApp(runner));

      expect(tree.files).not.toContain('/projects/app/src/app/foo/foo.component.css');
    });

    it('should fall back to the @schematics/angular:component option value', async () => {
      const tree = await runner
                       .runSchematic(
                           'grid', baseOptions, await createTestApp(runner, {inlineStyle: true}));

      expect(tree.files).not.toContain('/projects/app/src/app/foo/foo.component.css');
    });
  });

  describe('inlineTemplate option', () => {
    it('should respect the option value', async () => {
      const tree =
          await runner
              .runSchematic(
                  'grid', {inlineTemplate: true, ...baseOptions}, await createTestApp(runner));

      expect(tree.files).not.toContain('/projects/app/src/app/foo/foo.component.html');
    });

    it('should fall back to the @schematics/angular:component option value', async () => {
      const tree =
          await runner
              .runSchematic(
                  'grid', baseOptions, await createTestApp(runner, {inlineTemplate: true}));

      expect(tree.files).not.toContain('/projects/app/src/app/foo/foo.component.html');
    });
  });

  describe('skipTests option', () => {
    it('should respect the option value', async () => {
      const tree = await runner
                       .runSchematic(
                           'grid', {skipTests: true, ...baseOptions}, await createTestApp(runner));

      expect(tree.files).not.toContain('/projects/app/src/app/foo/foo.component.spec.ts');
    });

    it('should fall back to the @schematics/angular:component option value', async () => {
      const tree = await runner
                       .runSchematic(
                           'grid', baseOptions, await createTestApp(runner, {skipTests: true}));

      expect(tree.files).not.toContain('/projects/app/src/app/foo/foo.component.spec.ts');
    });
  });
});
