type File = {
  type: 'file';
  name: string;
};

type Directory = {
  type: 'directory';
  name: string;
  children: (File | Directory)[];
};

/**
 * Traverse files & directories.
 *
 * Return a list of every files filtered by given function.
 */
export const visitFiles = (
  root: (File | Directory)[],
  filterFn: (current: File) => boolean
): (File | Directory)[] => {
  return root.reduce(
    (acc: (File | Directory)[], item: File | Directory, index: number) => {
      if (item.type === 'file' && filterFn(item)) {
        acc.push(item);
      }
      if (item.type === 'directory') {
        if (item.children) {
          const res = visitFiles(item.children, filterFn);
          acc.push({
            type: item.type,
            name: item.name,
            children: res,
          } as Directory);
        }
      }
      return acc;
    },
    []
  );
};

const exempleDirectory = [
  { type: 'file', name: 'kayak' },
  {
    type: 'directory',
    name: 'dir1',
    children: [
      { type: 'file', name: 'notanotherstring' },
      {
        type: 'directory',
        name: 'dir2',
        children: [
          { type: 'file', name: 'lol' },
          { type: 'file', name: 'thisisatest' },
        ],
      },
    ],
  },
  { type: 'file', name: 'yolo' },
  { type: 'file', name: 'miaaim' },
] as (File | Directory)[];

const filteredFiles = visitFiles(exempleDirectory, (file) => {
  const name = file.name;

  for (let i = 0; i < Math.floor(name.length) / 2; i++) {
    if (name[i] != name[name.length - 1 - i]) {
      return false;
    }
  }
  return true;
});
