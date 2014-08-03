django-sirtrevor-file
=====================

**django-sirtrevor-file** is a file block for `django-sirtrevor`_.


Quick start
-----------

1. Install django-sirtrevor-file::

    pip install django-sirtrevor-file

2. Add ``sirtrevor_file`` to your INSTALLED_APPS setting like this::

    INSTALLED_APPS = (
        ...
        'sirtrevor',
        'sirtrevor_file',
    )

3. Add `File` block type to the list of supported block types in
``settings.py``::

   SIRTREVOR_BLOCK_TYPES = ['Text', 'List', 'Image', 'Video', 'File']


The «File» block type should now be available wherever you use a
``SirTrevorField`` in your project.


License
-------

MIT_


.. _django-sirtrevor: https://github.com/philippbosch/django-sirtrevor
.. _MIT: http://philippbosch.mit-license.org/
